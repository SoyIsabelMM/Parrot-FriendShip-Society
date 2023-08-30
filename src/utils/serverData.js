import billDark from "../profile-images/bill-dark.png";
import billLight from "../profile-images/bill-light.png";

import maryDark from "../profile-images/mary-dark.png";
import maryLight from "../profile-images/mary-light.png";

let serverData = {
  friends: [
    {
      name: "Daniel",
      id: "0",
      profilePicDark: billDark,
      profilePicLight: billLight,
      location: "Boise, Idaho",
      favBirdQuote: "The early bird gets the worm",
      parrotsOwned: [
        {
          name: "Jimjim",
          favoriteToys: ["ball", "ribbon"],
        },
        {
          name: "Charles",
          favoriteToys: ["the little cup", "his bear"],
        },
      ],
    },
    {
      name: "Mary",
      id: "1",
      profilePicDark: maryDark,
      profilePicLight: maryLight,
      location: "London, England",
      favBirdQuote: "A bird in the hand is worth two in the bush",
      parrotsOwned: [
        {
          name: "Smitty",
          favoriteToys: ["pencil", "squeaker"],
        },
      ],
    },
  ],
};
export default serverData;
