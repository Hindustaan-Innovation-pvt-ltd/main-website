import { cn } from "@/lib/utils";
import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "flex h-12 w-full rounded-lg border bg-neutral-900/80 px-4 py-2 text-sm text-neutral-100 placeholder:text-neutral-500",
            "focus:outline-none focus:ring-2 focus:ring-neutral-500/30 focus:border-neutral-600 transition-all",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-red-500/50 focus:ring-red-500/30 focus:border-red-500/50",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-xs font-medium text-red-400 ml-1">{error}</p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  wrapperClassName?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, wrapperClassName, error, ...props }, ref) => {
    return (
      <div className={cn("relative flex flex-col", wrapperClassName)}>
        <textarea
          className={cn(
            "flex min-h-[120px] w-full rounded-lg border bg-neutral-900/80 px-4 py-3 text-sm text-neutral-100 placeholder:text-neutral-500",
            "focus:outline-none focus:ring-2 focus:ring-neutral-500/30 focus:border-neutral-600 transition-all resize-none",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-red-500/50 focus:ring-red-500/30 focus:border-red-500/50",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-xs font-medium text-red-400 ml-1">{error}</p>
        )}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, required, children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          "text-sm font-medium text-neutral-300 ml-1 mb-1.5 block",
          className
        )}
        {...props}
      >
        {children}
        {required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
    );
  }
);
Label.displayName = "Label";

export { Label };