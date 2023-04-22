export function BookTitle({ title, size }: BookTitleProbs) {
  const sizeClasses = {
    small: "text-left text-medium",
    medium: "text-lg mb-1 m-4",
    large: "text-3xl mb-1 m-4",
  };
  return (
    <h1
      className={`text-gray-900 ${sizeClasses[size]} title-font font-medium`}
    >
      {title}
    </h1>
  );
}
interface BookTitleProbs {
  title: string;
  size: "small" | "medium" | "large";
}
