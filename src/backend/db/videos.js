/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

 const videos = [
  {
    _id: "aWzlQ2N6qqg",
    thumbnail_id :"U_u8MzNZ7TA",
    category:"Action",
    title: "Marvel Studios' Doctor Strange in the Multiverse of Madness",
    description:
      "Enter a new dimension of Strange. Watch the official trailer for Marvel Studios' Doctor Strange in the Multiverse of Madness. Only in theaters May 6. In Marvel Studios. “Doctor Strange in the Multiverse of Madness,” the MCU unlocks the Multiverse and pushes its boundaries further than ever before",
    channel: "Marvel Entertainment",
    channelAvtar:"https://yt3.ggpht.com/fGvQjp1vAT1R4bAKTFLaSbdsfdYFDwAzVjeRVQeikH22bvHWsGULZdwIkpZXktcXZc5gFJuA3w=s48-c-k-c0x00ffffff-no-rj",
    isNewer:true,
    isPopular:true
  },
  {
    _id:"ZYzbalQ6Lg8",
    thumbnail_id :"UNow5oWracE",
    category:"Action",
    title: "SPIDER-MAN: NO WAY HOME ",
    description:"We started getting visitors… from every universe. Watch the official trailer for #SpiderManNoWayHome, exclusively in movie theaters December 17. Tickets on sale C̶y̶b̶e̶r̶ Spider-Monday, November 29.",
    channel: "Marvel Entertainment",
    channelAvtar:"https://yt3.ggpht.com/fGvQjp1vAT1R4bAKTFLaSbdsfdYFDwAzVjeRVQeikH22bvHWsGULZdwIkpZXktcXZc5gFJuA3w=s48-c-k-c0x00ffffff-no-rj",
    isNewer:false,
    isPopular:false
  },
  {
    _id:"JKa05nyUmuQ",
    thumbnail_id :"UP-xqotqFxM",
    category:"Action",
    title: "Free Guy",
    description:"Ryan Reynolds stars in this action-packed comedy as a mild-mannered bank teller named Guy, who learns he's really a background character in an open-world video game. Every day, Guy is under assault by players and objects within the game, where he's robbed, hit by cars, and otherwise mistreated as a NPC",
    channel: "Excel Movies",
    channelAvtar:"https://yt3.ggpht.com/ytc/AKedOLQ0-Fy-Jar8uziiEmKe6jLw10oHpKeTPInAE22f=s48-c-k-c0x00ffffff-no-rj",
    isNewer:true,
    isPopular:true
  },
  {
    _id: "TcMBFSGVi1c",
    thumbnail_id :"X7G1soqzaRA",
    category:"Sci-Fi",
    title: "Marvel Studios' Avengers: Endgame",
    description:"Whatever it takes. Watch the brand-new trailer for Marvel Studios' Avengers: Endgame. In theaters April 26",
    channel: "Marvel Entertainment",
    channelAvtar:"https://yt3.ggpht.com/fGvQjp1vAT1R4bAKTFLaSbdsfdYFDwAzVjeRVQeikH22bvHWsGULZdwIkpZXktcXZc5gFJuA3w=s48-c-k-c0x00ffffff-no-rj",
    isNewer:false,
    isPopular:true
  },
 
  {
    _id: "8g18jFHCLXk",
    thumbnail_id :"XoJKQqhCDEQ",
    category:"Sci-Fi",
    title: "Dune | Official Main Trailer",
    description:"A mythic and emotionally charged hero's journey, “Dune” tells the story of Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, who must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence—a commodity capable of unlocking humanity's greatest potential—only those who can conquer their fear will survive.",
    channel: "Warner Bros. Pictures",
    channelAvtar:"https://yt3.ggpht.com/ytc/AKedOLTUnZtaiWtHHHFxqilQey0x3Psd8rRtiIDxyYgHCg=s48-c-k-c0x00ffffff-no-rj",
    isNewer:true,
    isPopular:false
  },
  {
    _id: "O-RgquKVTPE",
    category:"Animated",
    thumbnail_id :"6gTUcTFxFIo",
    title: "The Good Dinosaur",
    description:"The Good Dinosaur asks the question: What if the asteroid that forever changed life on Earth missed the planet completely and giant dinosaurs never became extinct? Pixar Animation Studios takes you on an epic journey into the world of dinosaurs where an Apatosaurus named Arlo makes an unlikely human friend. While traveling through a harsh and mysterious landscape, Arlo learns the power of confronting his fears and discovers what he is truly capable of.",
    channel:"Walt Disney Animation Studios",
    channelAvtar:"https://yt3.ggpht.com/Ym_5TAhe4-1DON2kALAJfVstTrddNxXcBYzstI51AeOeed-gaYXh0t2aZx1wqCecEJzJkoI1WA=s48-c-k-c0x00ffffff-no-rj",
    isNewer:true,
    isPopular:false
  },
  {
    _id: "10r9ozshGVE",
    category:"Animated",
    thumbnail_id :"961mWgpC9E8",
    title:"Kung Fu Panda 3",
    description:"In 2016, one of the most successful animated franchises in the world returns with its biggest comedy adventure yet, KUNG FU PANDA 3.When Po's long-lost panda father suddenly reappears, the reunited duo travels to a secret panda paradise to meet scores of hilarious new panda characters.  But when the supernatural villain Kai begins to sweep across China defeating all the kung fu masters, Po must do the impossible—learn to train a village full of his fun-loving, clumsy brethren to become the ultimate band of Kung Fu Pandas",
    channel: "Pixar",
    channelAvtar:"https://yt3.ggpht.com/ytc/AKedOLSBfkJAvB3Um5-4WDnbeOg8p8LkZKKW3GcJQ8SHuQ=s48-c-k-c0x00ffffff-no-rj",
    isNewer:false,
    isPopular:true
  },
  {
    _id: "EQRFgGwGeok",
    thumbnail_id :"KukngjCoN-s",
    category:"Horror",
    title: "THE NUN",
    description:"Filmmaker James Wan, director of the record-setting horror hits “The Conjuring” and “The Conjuring 2,” explores another dark corner of that universe with “The Nun.”  Directed by Corin Hardy (“The Hallow”), the new fright-fest is produced by Wan and by Peter Safran, who has produced all the films in “The Conjuring” franchise.When a young nun at a cloistered abbey in Romania takes her own life, a priest with a haunted past and a novitiate on the threshold of her final vows are sent by the Vatican to investigate.  Together they uncover the order’s unholy secret.  Risking not only their lives but their faith and their very souls, they confront a malevolent force in the form of the same demonic nun that first terrorized audiences in “The Conjuring 2,” as the abbey becomes a horrific battleground between the living and the damned",
    channel: "Warner Bros. Pictures",
    channelAvtar:"https://yt3.ggpht.com/ytc/AKedOLTUnZtaiWtHHHFxqilQey0x3Psd8rRtiIDxyYgHCg=s48-c-k-c0x00ffffff-no-rj",
    isNewer:false,
    isPopular:false
  },
  {
    _id: "Gczt0fhawDs",
    thumbnail_id :"m0K3aykNPz4",
    category:"Horror",
    title: "MALIGNANT",
    description:"“Malignant” is the latest creation from “Conjuring” universe architect James Wan (“Aquaman,” “Furious 7”).  The film marks director Wan's return to his roots with this new original horror thriller.In the film, Madison is paralyzed by shocking visions of grisly murders, and her torment worsens as she discovers that these waking dreams are in fact terrifying realities.  ",
    channel: "Warner Bros. Pictures",
    channelAvtar:"https://yt3.ggpht.com/ytc/AKedOLTUnZtaiWtHHHFxqilQey0x3Psd8rRtiIDxyYgHCg=s48-c-k-c0x00ffffff-no-rj",
    isNewer:false,
    isPopular:false
  },
  {
    _id: "8gTeE6pa4Kg",
    thumbnail_id :"bRngxN-KzP8",
    category:"Documentry",
    title: "Sachin: A Billion Dreams",
    description:"The film is based on the life of Indian cricketer Sachin Tendulkar. It captures Tendulkar's cricket and personal life in substantial detail, as well as reveals few aspects of his life which have never been heard of or seen before",
    channel: "Netflix",
    channelAvtar:"https://yt3.ggpht.com/ytc/AKedOLTZzZv60B1v76eOC7TsEYZD_TMH2-H5KeYxkfXGBQ=s48-c-k-c0x00ffffff-no-rj",
    isNewer:false,
    isPopular:true
  }
  
];

export { videos }