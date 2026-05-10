import imageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "../env";

const builder = imageUrlBuilder({ projectId, dataset });

// Accepts whatever Sanity stores in image fields (asset reference, URL, etc.)
export function urlFor(source: Parameters<typeof builder.image>[0]) {
  return builder.image(source);
}
