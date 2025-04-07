import {
  ButtonHTMLAttributes,
  forwardRef,
  PropsWithChildren,
  useEffect,
  useRef,
} from "react";

export type ButtonWihtoutRefProps = {
  buttonRef: React.RefObject<HTMLButtonElement>;
  onClick: () => void;
  children: React.ReactNode;
};

export function ButtonWithoutRef({
  onClick,
  children,
  buttonRef,
}: ButtonWihtoutRefProps) {
  return (
    <button ref={buttonRef} onClick={onClick}>
      {children}
    </button>
  );
}

export type ButtonwithRefProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement>
>;

const ButtonWithRef = forwardRef<HTMLButtonElement, ButtonwithRefProps>(
  ({ children, ...props }, ref) => {
    return (
      <button ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

export function SampleComponent() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    buttonRef.current?.focus();
  }, []);
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div>
      <h1>Sample Component</h1>
      <ButtonWithRef onClick={handleClick} ref={buttonRef}>
        Click Me!
      </ButtonWithRef>
    </div>
  );
}
