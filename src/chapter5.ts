export default null;

type Shoe = {
  purpose: string;
};

class BalletFlat implements Shoe {
  purpose = 'dancing';
}

class Boot implements Shoe {
  purpose = 'woodcutting';
}

class Sneaker implements Shoe {
  purpose = 'walking';
}

type ShoeFactory = {
  create: {
    (type: 'balletFlat'): BalletFlat;
    (type: 'boot'): Boot;
    (type: 'sneaker'): Sneaker;
  };
};

let ShoeFactory: ShoeFactory = {
  create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe {
    switch (type) {
      case 'balletFlat':
        return new BalletFlat();
      case 'boot':
        return new Boot();
      case 'sneaker':
        return new Sneaker();
    }
  }
};

class RequestBuilder {
  private url: string | null = null;
  private method: 'get' | 'post' | null = null;
  private data: object | null = null;

  setUrl(url: string): this {
    this.url = url;
    return this;
  }
  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }
  setData(data: object) {
    this.data = data;
    return this;
  }
  send(): void {
    console.log({
      data: this.data,
      method: this.method,
      url: this.url
    });
  }
}
