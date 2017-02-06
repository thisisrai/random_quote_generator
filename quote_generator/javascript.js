var quotes = ['God has no religion.',
'The one religion is beyond all speech.','Even if you are a minority of one, the truth is the truth.',
'Prayer is the key of the morning and the bolt of the evening.',
'Faith is put to the test when the situation is most difficult.',
'As long as you derive inner help and comfort from anything, keep it.',
'Faith becomes lame, when it ventures into matters pertaining to reason!',
'I believe in the fundamental truth of all great religions of the world.',
'A leader is useless when he acts against the promptings of his own conscience.',
'In matters of conscience, the law of the majority has no place.',
'To retaliate against the relatives of the co-religionists of the wrong-doer is a cowardly act.',
'Ashram means a community of men of religion. I feel that an ashram was a necessity of life for me.',
"Religion is a matter of the heart. No physical inconvenience can warrant abandonment of one's own religion.",
'An eye for an eye will only make the whole world blind.',
'Live as if you were to die tomorrow. Learn as if you were to live forever.',
'Freedom is not worth having if it does not include the freedom to make mistakes.',
'Always aim at complete harmony of thought and word and deed. Always aim at purifying your thoughts and everything will be well.',
'One can measure the greatness and the moral progress of a nation by looking at how it treats its animals.',
'I wish to change their minds, not kill them for weaknesses we all poses.',
"Earth provides enough to satisfy every man's needs, but not even one man's greed.",
'To give pleasure to a single heart by a single act is better than a thousand heads bowing in prayer.',
'Freedom is not worth having if it does not include the freedom to make mistakes.',
'An error does not become truth by reason of multiplied propagation, nor does truth become error because nobody sees it.',
'Live as if you were to die tomorrow. Learn as if you were to live forever.',
'Prayer is the key of the morning and the bolt of the evening.',
'Even if you are a minority of one, the truth is the truth.',
'A man is but the product of his thoughts what he thinks, he becomes.',
'Among the many misdeeds of the British rule in India, history will look upon the act depriving a whole nation of arms as the blackest.',
'Always aim at complete harmony of thought and word and deed, always aim at purifying your thoughts and everything will be well.',
'A small body of determined spirits fired by an unquenchable faith in their mission can alter the course of history.',
'Faith becomes lame, when it ventures into matters pertaining to reason!',
'Fear has its use but cowardice has none.',
'My life is my message.',
'Nobody can hurt me without my permission.',
'All humanity is one undivided and indivisible family, and each one of us is responsible for the misdeeds of all the others.',
'Distinguish between real needs and artificial wants and control the latter.',
'Satisfaction lies in the effort, not in the attainment. Full effort is full victory.',
'When you want to find Truth as God, the only inevitable means is love, that is nonviolence.',
"The difference between what we do and what we are capable of doing would suffice to solve most of the world's problem.",
'We have to handover the earth, the air, the land and the water to the children at least as it was handed over to us.',
'As long as you derive inner help and comfort from anything, keep it.',
'I am prepared to die, but there is no cause for which I am prepared to kill.',
'Love is the strongest force the world possesses, yet it is the humblest imaginable.',
'You may never know what results come of your actions, but if you do nothing, there will be no results.',
'Before the throne of the Almighty, man will be judged not by his acts but by his intentions. For God alone reads our hearts.',
'Nothing has saddened me so much in life as the hardness of heart of educated people.',
'Peace between countries must rest on the solid foundation of love between individuals.',
'Power based on love is a thousand times more effective and permanent than the one derived from fear of punishment.',
'Faith is put to the test when the situation is most difficult.',
'Anger is the enemy of non-violence and pride is a monster that swallows it up.',
'Peace is the most powerful weapon of mankind.',
"To answer brutality with brutality is to admit one's moral and intellectual bankruptcy and it can only start a viscous cycle.",
'One needs to be slow to form convictions, but once formed they must be defended against the heaviest odds.',
'A man is the sum of his actions, of what he has done, of what he can do, nothing else.',
'Freedom is never dear at any price. It is the breath of life. What would a man not pay for living?'];

var postquotes = 'Happiness is when what you think, what you say, and what you do are in harmony.';

function newQuote(){
var randomNumber = Math.floor(Math.random()*(quotes.length));
document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
postquotes = quotes[randomNumber];
}

function post(){
  window.open("http://twitter.com/home?status="+postquotes+" -Mohandas Karamchand Gandhi");

}
