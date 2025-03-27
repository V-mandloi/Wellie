export function Card({ children, className = "" }) {
  return (
    <div className={`bg-green-100 rounded-2xl shadow-lg p-4 ${className}`}>
      {children}
    </div>
  );
}
