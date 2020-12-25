export type TriviaPercentage = "0" | "1" | "3" | "5" | "10" | "15" | "20" | "25" | "30" | "35" | "40" | "45" | "50"

export const trivia : Record<TriviaPercentage, string[]> = {
  "3": ["getting two 6s when rolling two dice is around 3%."],
  "5": ["an adult is an only child", "odds a guy born in 1950 is named Robert."],
  "10": ['a mobile bought in 2020 is made by Xiaomi.'],
  "20": ["a homeless person is under 18."], 
  "25": ["an employed adult is somewhat satisfied with his or her boss."] ,
  "30": ["an adult uses the Internet before going to bed."] ,
  "35": ["a student 12-18 will be bullied at school in a year."],
  "40": ["a student 12-18 will be bullied at school in a year."],
  "45": ["a coin flip lands on tails."],
  "50": ["a coin flip lands on heads."],
  "15": ["an adult has less than a high school diploma.", 
  "an adult with a tattoo regrets it."],
  "0": ["a person will die from a heart attack in a year."],
  "1": ["an adult showers less than once a week.", "odds an adult under 50 doesn't own a cellphone."]
}