class Animagus{
  constructor($elem) {
    this.$ = $elem;
    this.width = this.$.clientWidth;
    this.height = this.$.clientHeight;
  }

  update() {
    if (this.updating) return false;

    this.updating = true;

    let width = this.$.clientWidth;
    let height = this.$.clientHeight;

    Object.assign(this.$.style, {
      width: `${this.width}px`,
      height: `${this.height}px`,
    });

    setTimeout(_ => {
      Object.assign(this.$.style, {
        width: `${width}px`,
        height: `${height}px`,
      });

      setTimeout(_ => {
        Object.assign(this.$.style, {
          width: null,
          height: null,
        });

        Object.assign(this, {
          width,
          height,
        });
        this.updating = false;
      }, 1000);
    }, 1000);
  }
}

export default Animagus;
