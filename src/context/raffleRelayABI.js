export const relayABI = [{"inputs":[{"internalType":"address","name":"raffleContractAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"getEnded","outputs":[{"components":[{"internalType":"uint32","name":"raffleId","type":"uint32"},{"internalType":"uint128","name":"ethPrice","type":"uint128"},{"internalType":"uint128","name":"doopPrice","type":"uint128"},{"internalType":"uint64","name":"endTime","type":"uint64"},{"internalType":"uint32","name":"entriesCount","type":"uint32"},{"internalType":"bool","name":"payableWithDoop","type":"bool"},{"internalType":"bool","name":"hasEnded","type":"bool"},{"internalType":"address","name":"winner","type":"address"},{"components":[{"internalType":"address","name":"NFTContract","type":"address"},{"internalType":"uint32","name":"NFTTokenId","type":"uint32"}],"internalType":"struct WhoopDoopRaffle.Prize","name":"rafflePrize","type":"tuple"}],"internalType":"struct WhoopDoopRaffle.Raffle[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOnGoing","outputs":[{"components":[{"internalType":"uint32","name":"raffleId","type":"uint32"},{"internalType":"uint128","name":"ethPrice","type":"uint128"},{"internalType":"uint128","name":"doopPrice","type":"uint128"},{"internalType":"uint64","name":"endTime","type":"uint64"},{"internalType":"uint32","name":"entriesCount","type":"uint32"},{"internalType":"bool","name":"payableWithDoop","type":"bool"},{"internalType":"bool","name":"hasEnded","type":"bool"},{"internalType":"address","name":"winner","type":"address"},{"components":[{"internalType":"address","name":"NFTContract","type":"address"},{"internalType":"uint32","name":"NFTTokenId","type":"uint32"}],"internalType":"struct WhoopDoopRaffle.Prize","name":"rafflePrize","type":"tuple"}],"internalType":"struct WhoopDoopRaffle.Raffle[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"}];