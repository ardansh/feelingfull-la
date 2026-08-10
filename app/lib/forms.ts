// Where all form submissions are delivered.
export const CONTACT_EMAIL = "feelingfulllosangeles@gmail.com";

// FormSubmit.co forwards submissions to CONTACT_EMAIL with no API key required.
// The first submission triggers a one-time confirmation email to that inbox —
// click "Activate Form" once and every submission after that is delivered.
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

/**
 * Sends a form payload to CONTACT_EMAIL. Returns true if it was accepted.
 * Extra fields prefixed with "_" configure FormSubmit (subject, template, etc.).
 */
export async function sendForm(
  payload: Record<string, string>,
): Promise<boolean> {
  try {
    const res = await fetch(FORMSUBMIT_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _captcha: "false",
        _template: "table",
        ...payload,
      }),
    });
    if (!res.ok) return false;
    const data = await res.json().catch(() => null);
    // FormSubmit returns { success: "true" | true } on acceptance.
    return data?.success === "true" || data?.success === true;
  } catch {
    return false;
  }
}
