export function Thumbnail({ url, title, size }: BookThumbnailProps) {
    const sizeClasses = {
        "small": "h-20",
        "medium": "h-48",
        "large": ""
    }
  return <img className={`w-full object-contain ${sizeClasses[size]}`} src={url} alt={title}></img>;
}
interface BookThumbnailProps {
  url: string;
  title: string;
  size: "small" | "medium" | "large";
}
