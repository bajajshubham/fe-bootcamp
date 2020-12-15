
var profile = {
      user_name:" ",
      points:0,
}

const readlinesync = require('readline-sync');
const chalk = require('chalk');
const log = console.log;
const clear = [false,false,false];

const question_bank = [
  {
      question:"How many individual centuries have been scored in World Cup finals so far?",
      one:"five",
      two:"six",
      three:"seven",
      four:"eight",
      ans:2,
  },
  {
      question:"In the 2015 World Cup final, who triggered New Zealand's collapse which saw them lose their last seven wickets for just threethree runs?",
      one:"James Faulkner",
      two:"Mitchel Johnson",
      three:"Josh Hazelwood",
      four:"Mitchel Starc",
      ans:1,
  },
  {
      question:"In the 1996 World Cup final, only one bowler ended up picking multiple wickets. Who was it?",
      one:"Chaminda Vaas",
      two:"Muttiah Murlidharan",
      three:"Sanath Jasuriya",
      four:"Arvand di silva",
      ans:4,
  },
    {
      question:"Who remains the only captain to have not gotten a chance to bat in a World Cup final so far?",
      one:"Steve Waugh",
      two:"Ian chappel",
      three:"Wasim Akhram",
      four:"Graham Coach",
      ans:1,
  },
    {
      question:"The 2007 World Cup final in Barbados witnessed a farcical finish under dark skies. What confusion caused the controversy?",
      one:"Ricky Ponting denied the umpires' request as he wanted to bowl out the opposition",
      two:"Umpires feared that they had to return the next day and bowl the remaining overs",
      three:"Sri Lanka were hell-bent to bat the remaining overs",
      four:"Players were under the assumption DLS method can't be applied for bad light",
      ans:2,
  },
      {
      question:"Which edition holds the record for the most maidens in a World Cup final?",
      one:"1975",
      two:"1979",
      three:"1983",
      four:"1987",
      ans:3,
  },
      {
      question:"Kapil Dev's memorable running catch to dismiss Sir Viv Richards in the 1983 World Cup final is known to all. Who was the bowler in that dismissal?",
      one:"Mohinder Amarnath",
      two:"Balwinder Sandhu",
      three:"Roger Binny",
      four:"Madan Lal",
      ans:4,
  },
      {
      question:"Which bowler holds the unwanted record for the most expensive figures in a World Cup final?",
      one:"Dilhara Fernando",
      two:"Trent Boult",
      three:"Nuwan Kulasekara",
      four:"Javagal Srinath",
      ans:4,
  },
      {
      question:"Chris Woakes recently spilled the beans about England's late tactical change in their third choice batsman for the Super Over in the 2019 WC final, whom did the think-tank zero in?",
      one:"Eoin Morgan",
      two:"Jason Roy",
      three:"Johny Bairstrow",
      four:"Joe Root",
      ans:1,
  },
  
];

function about()
{
  console.clear();
  var user_message = "Cricket Quiz, created by bajajshubham \n";
 // console.log(user_message);
 log(chalk.black.underline.bgCyanBright.bold(user_message));
}

function welcome()
{
  profile.user_name = readlinesync.question("What is your name? ");
  if(!profile.user_name){
    welcome()
  }
}

function print_rules()
{
  var rules="Welcome to Cricket Quiz.\n\n You have 9 questions with 4 options. \n Each Correct option gives you 50 points \n Wrong option deductes 25 points. \n There are 3 levels Level1, Level2 and Level3 \n To pass each level you have to score 150 points.\n If choice is correct then user will \n See message'Boundary' else 'Bowled' \n Exit any time enter or press '0' \n"

  log(chalk.black.italic.bgBlueBright.bold("\nHi "+profile.user_name+", "+rules))
}

function user_about()
{
  var msg1 = "\n Hey "+profile.user_name+" you scored "+profile.points+" points \n";
  var msg2 = "Share it on twitter \nWith #CricketQuizCli and score screenshot \nTag me: @bajajshubham1O1\n";
  //console.log(msg1);
  log(chalk.black.bgCyanBright.bold(msg1));
  if(profile.points!=0)
  {
    log(chalk.black.bgCyanBright.bold(msg2));
  }
}

function level_check(points)
{
 
  if(points>=450 && clear[0]===false){
        log(chalk.underline.red("\n Hurray "+profile.user_name+" cleared Level3"));
        clear[0]=true;
  }else if (points>=300 && clear[1]===false){
        log(chalk.underline.red("\n Hurray "+profile.user_name+" cleared Level2"));
        clear[1]=true;
  }else if (points>=150 && clear[2]===false){
        log(chalk.underline.red("\n Hurray "+profile.user_name+" cleared Level1"));
        clear[2]=true;
  }
}

function play()
{
  let xi=0;
  for(; xi<question_bank.length; xi++)
  {
    ques = question_bank[xi];
    
    opt1 = ques.one,
    opt2 = ques.two,
    opt3 = ques.three,
    opt4 = ques.four
    
    options = [opt1,opt2,opt3,opt4];

    console.log("\nQ"+(xi+1),": ",ques.question);
    ans = readlinesync.keyInSelect(options);
    console.log("\n");

    if(ans === -1)
    {
      user_about();
      break;
    }
    else{
      if( (ans+1) === ques.ans )
    {
      profile.points+=50;
     // console.log(""+"Boundary");
     log(chalk.black.bgGreen("Boundary"));
    }else{
      profile.points-=25;
      //console.log(""+"Bowled");
      log(chalk.black.bgRed("Bowled"));
    }
    }

    level_check(profile.points);

  }
  //console.log(xi);
  if(xi === question_bank.length)
  {
    user_about();
  }

}

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
about();
welcome();
print_rules();
play();
