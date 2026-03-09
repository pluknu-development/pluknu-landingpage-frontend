exports.handler = async (event, context) => {
  console.log('Function called with method:', event.httpMethod);
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  const { email } = JSON.parse(event.body);
  console.log('Email received:', email);

  if (!email) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Email is required' }),
    };
  }

  const apiKey = process.env.BREVO_API_KEY;
  console.log('API Key present:', !!apiKey);
  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'API key not configured' }),
    };
  }

  const data = {
    sender: { email: 'development@pluknu.nl', name: 'PlukNu' }, // Vervang door je eigen sender
    to: [{ email }],
    subject: 'Welkom bij PlukNu!',
    htmlContent: `
      <h1>Bedankt voor je aanmelding!</h1>
      <p>Je bent succesvol aangemeld voor PlukNu in IJselmuiden.</p>
      <p>We houden je op de hoogte van de lancering.</p>
    `,
  };

  try {
    console.log('Sending to Brevo...');
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify(data),
    });

    console.log('Brevo response status:', response.status);
    const responseBody = await response.text();
    console.log('Brevo response body:', responseBody);
    if (!response.ok) {
      throw new Error(`Brevo API error: ${response.status} - ${responseBody}`);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Error in function:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
    };
  }
};