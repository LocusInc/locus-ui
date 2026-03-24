const breakpoints = ["initial", "xs", "sm", "md", "lg", "xl"] as const;
type Breakpoint = (typeof breakpoints)[number];
type Union<S = string, T extends string | number = string> = T | Omit<S, T>;
type Responsive<T> = T | Partial<Record<Breakpoint, T>>;

type BooleanPropDef = {
  type: "boolean";
  default?: boolean;
  required?: boolean;
  className?: string;
  cssProperty?: string;
  dataAttr?: string;
};

type StringPropDef = {
  type: "string";
  default?: string;
  required?: boolean;
  className?: string;
  cssProperty?: string;
};

type NumberPropDef = {
  type: "number";
  default?: number;
  required?: boolean;
};

type ReactNodePropDef<T = React.ReactNode> = {
  type: "reactNode";
  required?: boolean;
};

type EnumPropDef<T> = {
  type: "enum";
  values: readonly T[];
  default?: T | "theme";
  required?: boolean;
  className?: string;
  dataAttr?: string;
};

type EnumOrStringPropDef<T extends string> = {
  type: "enum | string";
  values: readonly T[];
  default?: T | "theme";
  required?: boolean;
  className?: string;
  dataAttr?: string;
  transform?: (value: string) => string;
};

type ValueOrArrayPropDef<T> = {
  type: "value | array";
  default?: T | T[];
  required?: boolean;
  className?: string;
};

type FunctionPropDef<
  T extends (...args: any[]) => any = (...args: any[]) => any,
> = {
  type: "function";
  required?: boolean;
};

type BasePropDef<T = any> =
  | BooleanPropDef
  | StringPropDef
  | NumberPropDef
  | ReactNodePropDef<T>
  | EnumPropDef<T>
  | EnumOrStringPropDef<T & string>
  | ValueOrArrayPropDef<T>
  | FunctionPropDef<T & ((...args: any[]) => any)>;

type ResponsivePropDef<T = any> = BasePropDef<T> & { responsive: true };

type PropDef<T = any> = BasePropDef<T> | ResponsivePropDef<T>;

type GetPropDefType<Def> = Def extends BooleanPropDef
  ? Def extends ResponsivePropDef
    ? Responsive<boolean>
    : boolean
  : Def extends StringPropDef
    ? Def extends ResponsivePropDef
      ? Responsive<string>
      : string
    : Def extends NumberPropDef
      ? Def extends ResponsivePropDef
        ? Responsive<number>
        : number
      : Def extends ReactNodePropDef<infer Type>
        ? Type
        : Def extends FunctionPropDef<infer Fn>
          ? Fn
          : Def extends EnumOrStringPropDef<infer Type>
            ? Def extends ResponsivePropDef<infer Type extends string>
              ? Responsive<Union<string, Type>>
              : Union<string, Type>
            : Def extends ValueOrArrayPropDef<infer Type>
              ? Def extends ResponsivePropDef<infer Type>
                ? Responsive<Type | Type[]>
                : Type | Type[]
              : Def extends EnumPropDef<infer Type>
                ? Def extends ResponsivePropDef<infer Type>
                  ? Responsive<Type>
                  : Type
                : never;

type GetPropDefTypes<P> = {
  [K in keyof P]?: GetPropDefType<P[K]>;
};

export { Breakpoint, GetPropDefTypes, PropDef, Responsive };
export type { FunctionPropDef, ReactNodePropDef, ValueOrArrayPropDef };
