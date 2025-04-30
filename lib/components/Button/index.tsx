import styles from "./styles.module.css";

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, ...restProps } = props;
  return (
    <button
      className={`${className} ${styles.button} bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded`}
      {...restProps}
    />
  );
}
