<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method Not Allowed']);
    exit;
}

$rawBody = file_get_contents('php://input');
$payload = json_decode($rawBody ?: '', true);

if (!is_array($payload)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON body']);
    exit;
}

$email = trim((string) ($payload['email'] ?? ''));

if ($email === '' || filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
    http_response_code(400);
    echo json_encode(['error' => 'Email is required']);
    exit;
}

$apiKey = getenv('BREVO_API_KEY') ?: ($_SERVER['BREVO_API_KEY'] ?? '');

if ($apiKey === '') {
    $configPath = getenv('BREVO_CONFIG_PATH') ?: '';

    if ($configPath !== '' && is_readable($configPath)) {
        $config = require $configPath;
        if (is_array($config) && isset($config['api_key'])) {
            $apiKey = (string) $config['api_key'];
        }
    }
}

if ($apiKey === '') {
    http_response_code(500);
    echo json_encode(['error' => 'API key not configured']);
    exit;
}

$requestBody = json_encode([
    'sender' => [
        'email' => 'development@pluknu.nl',
        'name' => 'PlukNu',
    ],
    'to' => [
        ['email' => $email],
    ],
    'subject' => 'Welkom bij PlukNu!',
    'htmlContent' => <<<HTML
<h1>Bedankt voor je aanmelding!</h1>
<p>Je bent succesvol aangemeld voor PlukNu in IJsselmuiden.</p>
<p>We houden je op de hoogte van de lancering.</p>
HTML,
], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

if ($requestBody === false) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to encode request body']);
    exit;
}

$ch = curl_init('https://api.brevo.com/v3/smtp/email');

curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/json',
        'api-key: ' . $apiKey,
    ],
    CURLOPT_POSTFIELDS => $requestBody,
    CURLOPT_TIMEOUT => 15,
]);

$responseBody = curl_exec($ch);
$curlError = curl_error($ch);
$statusCode = (int) curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
curl_close($ch);

if ($responseBody === false) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email', 'details' => $curlError]);
    exit;
}

if ($statusCode < 200 || $statusCode >= 300) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email']);
    exit;
}

echo json_encode(['message' => 'Email sent successfully']);
