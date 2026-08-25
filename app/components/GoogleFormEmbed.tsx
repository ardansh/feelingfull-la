// Shared embed for the FeelingFullLA Google Form.
// Responses go straight to the Google account that owns the form.
export const INTEREST_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScc0CX1cruflvke7iw0Nms96DCJfbrAD8_w7cyDwkva2KTrmg/viewform";
export const INTEREST_FORM_SRC = `${INTEREST_FORM_URL}?embedded=true`;

export default function GoogleFormEmbed({
  src = INTEREST_FORM_SRC,
  title,
}: {
  src?: string;
  title: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-sm">
      <iframe
        src={src}
        title={title}
        loading="lazy"
        className="h-[1100px] w-full"
      >
        Loading…
      </iframe>
    </div>
  );
}
