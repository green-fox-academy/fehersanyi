class Thing {
  private name: string;
  private completed: boolean;

  constructor(name: string){
      this.name = name;
  }
  public complete() {
      this.completed = true;
  }
	get isitComplete() {
		if (this.completed === true) {
			return '[x]';
		} else {
			return '[ ]';
		}
	}
	get urName() {
		return this.name;
	}
}


export {Thing};