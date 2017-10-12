export class Ingredient {
  // adding accessors in front of argument names is a typescript shortcut
  // for declaring them outside the constructor (public name: string;)
  // and then assigning them inside constructor (this.name = name;)
  constructor(public name: string, public amount: number) {}
}
