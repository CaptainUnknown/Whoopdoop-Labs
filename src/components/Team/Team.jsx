import React from "react";

import styles from "./styles.module.scss";

import alex from "../../assets/avatars/alex.png";
import chen from "../../assets/avatars/chen.png";
import phill from "../../assets/avatars/phill.png";
import jaffar from "../../assets/avatars/jaffar.png";
import logan from "../../assets/avatars/logan.png";
import captain from "../../assets/avatars/captain.png";
import patrick from "../../assets/avatars/Patrick.png";

const team = [
  {
    avatar: alex,
    name: "Alex",
    bio: "Project manager / Managed IT Solutions expert and project coordinator from ExxonMobil. In crypto since 2014 . Building friendships and setting up collaborations in space ever since. Houston, TX",
    link: "https://twitter.com/otherguydoteth",
  },
  {
    avatar: chen,
    name: "Chen",
    bio: "Defender of the people | DAO Founder",
    link: "https://twitter.com/CallMeChenAgain",
  },
  {
    avatar: patrick,
    name: "Patrick",
    bio: "(AKA Mr. Boston) is from Massachusetts and has a background in construction management & design. He is an entrepreneur and a huge believer in web3 and NFTs. He built his reputation on trust, loyalty, and honesty and would love to share a beer with everyone. Fun Fact: Patrick has tried over 2,000 different beers!",
    link: "https://twitter.com/bostonbeerguy_",
  },
  {
    avatar: phill,
    name: "Phill",
    bio: "Phill (AKA GrizzlyDesign) is a freelance Web3 developer that created this website/dashboard and has worked with many large projects in the crypto space including TCG World, $GREED, DRIVENx, and many more. ",
    link: "https://t.me/grizzlydesign",
  },
  {
    avatar: jaffar,
    name: "Jaffar",
    bio: "Project IT lead for a multi national company. Has started my crypto journey in 2018 and has been more involved in the NFT since January 2022. Love web3 because we can find new friends around the world and discover their culture. Living in Mauritius island.",
    link: "https://twitter.com/islamuchacho",
  },
  {
    avatar: logan,
    name: "Logan",
    bio: "Logan (aka Squiggy) Marketing and Discord Integrations for Whoopsie Doopsies. Financial and Entrepreneurial background involved with crypto since 2020. An avid believer in Web3 & Blockchain innovation. Helping to provide quality and assurance for the community.",
    link: "https://twitter.com/SquiggyNFT",
  },
  {
    avatar: captain,
    name: "Captain Unknown",
    bio: "Captain is a freelance Web3 Developer that created all new Raffle & Marketplace System | De Oppresso Liber! 7th SFG, Green Beret",
    link: "https://twitter.com/captainunknown5",
  },
];

export default function Team() {
  return (
    <div className={styles.teamSection}>
      <div id="team" className={styles.titleContainer}>
        <h2>MEET THE TEAM</h2>
      </div>
      <div className={styles.teamContainer}>
        {team.map((member) => (
          <div key={member.name} className={styles.teamCard}>
            <div className={styles.cardInner}>
              <div className={styles.avatarContainer}>
                <img alt="team member avatar" src={member.avatar} />
              </div>
              <div className={styles.avatarContainerBack}>
                <span className={styles.nameContainer}>
                  <h2>{member.name}</h2>
                  <a
                    href={`${member.link}`}
                    className={styles.socialIcon}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {member.name === "Phill" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 30 30"
                      >
                        <path d="M 25.154297 3.984375 C 24.829241 3.998716 24.526384 4.0933979 24.259766 4.2011719 C 24.010014 4.3016357 23.055766 4.7109106 21.552734 5.3554688 C 20.048394 6.0005882 18.056479 6.855779 15.931641 7.7695312 C 11.681964 9.5970359 6.9042108 11.654169 4.4570312 12.707031 C 4.3650097 12.746607 4.0439208 12.849183 3.703125 13.115234 C 3.3623292 13.381286 3 13.932585 3 14.546875 C 3 15.042215 3.2360676 15.534319 3.5332031 15.828125 C 3.8303386 16.121931 4.144747 16.267067 4.4140625 16.376953 C 5.3912284 16.775666 8.4218473 18.015862 8.9941406 18.25 C 9.195546 18.866983 10.29249 22.222526 10.546875 23.044922 C 10.714568 23.587626 10.874198 23.927519 11.082031 24.197266 C 11.185948 24.332139 11.306743 24.45034 11.453125 24.542969 C 11.511635 24.579989 11.575789 24.608506 11.640625 24.634766 L 11.644531 24.636719 C 11.659471 24.642719 11.67235 24.652903 11.6875 24.658203 C 11.716082 24.668202 11.735202 24.669403 11.773438 24.677734 C 11.925762 24.726927 12.079549 24.757812 12.216797 24.757812 C 12.80196 24.757814 13.160156 24.435547 13.160156 24.435547 L 13.181641 24.419922 L 16.191406 21.816406 L 19.841797 25.269531 C 19.893193 25.342209 20.372542 26 21.429688 26 C 22.057386 26 22.555319 25.685026 22.875 25.349609 C 23.194681 25.014192 23.393848 24.661807 23.478516 24.21875 L 23.478516 24.216797 C 23.557706 23.798129 26.921875 6.5273437 26.921875 6.5273438 L 26.916016 6.5507812 C 27.014496 6.1012683 27.040303 5.6826405 26.931641 5.2695312 C 26.822973 4.8564222 26.536648 4.4608905 26.181641 4.2480469 C 25.826669 4.0352506 25.479353 3.9700339 25.154297 3.984375 z M 24.966797 6.0742188 C 24.961997 6.1034038 24.970391 6.0887279 24.962891 6.1230469 L 24.960938 6.1347656 L 24.958984 6.1464844 C 24.958984 6.1464844 21.636486 23.196371 21.513672 23.845703 C 21.522658 23.796665 21.481573 23.894167 21.439453 23.953125 C 21.379901 23.91208 21.257812 23.859375 21.257812 23.859375 L 21.238281 23.837891 L 16.251953 19.121094 L 12.726562 22.167969 L 13.775391 17.96875 C 13.775391 17.96875 20.331562 11.182109 20.726562 10.787109 C 21.044563 10.471109 21.111328 10.360953 21.111328 10.251953 C 21.111328 10.105953 21.035234 10 20.865234 10 C 20.712234 10 20.506484 10.14875 20.396484 10.21875 C 18.963383 11.132295 12.671823 14.799141 9.8515625 16.439453 C 9.4033769 16.256034 6.2896636 14.981472 5.234375 14.550781 C 5.242365 14.547281 5.2397349 14.548522 5.2480469 14.544922 C 7.6958673 13.491784 12.47163 11.434667 16.720703 9.6074219 C 18.84524 8.6937992 20.838669 7.8379587 22.341797 7.1933594 C 23.821781 6.5586849 24.850125 6.1218894 24.966797 6.0742188 z"></path>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                      </svg>
                    )}
                  </a>
                </span>
                <p>{member.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
