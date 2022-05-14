// 🐦 Twitter                   https://twitter.com/vandadnp
// 🔵 LinkedIn                  https://linkedin.com/in/vandadnp
// 🎥 YouTube                   https://youtube.com/c/vandadnp
// 🤝 Want to support my work?  https://buymeacoffee.com/vandad

interface House {
  readonly ownersName: string;
  readonly address: {
    readonly line1: string;
    line2?: string;
    readonly postCode: string;
  };
}

const house: House = {
  ownersName: "Foo Bar",
  address: {
    line1: "Baz Qux",
    postCode: "102030",
  },
};

house.ownersName = "Foo";

house.address.line1 = "Bar";

house.address.line2 = "Baz";
