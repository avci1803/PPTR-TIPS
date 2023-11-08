export default class Homepage {
  constructor(p) {
    this.p = p;
  }

  async visit() {
    await this.p.goto("http://zero.webappsecurity.com/index.html");
  }
}
