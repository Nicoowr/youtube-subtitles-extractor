import {parseVttInput} from "../src/parseVttInput";

const input = "WEBVTT\n" +
    "Kind: captions\n" +
    "Language: en\n" +
    "\n" +
    "00:00:00.090 --> 00:00:03.480\n" +
    "- Just be yourself has\n" +
    "become sort of a statement\n" +
    "\n" +
    "00:00:03.480 --> 00:00:05.460\n" +
    "that people venerate these days.\n" +
    "\n" +
    "00:00:05.460 --> 00:00:07.710\n" +
    "People celebrate just be yourself,\n" +
    "\n" +
    "00:00:07.710 --> 00:00:10.500\n" +
    "probably because it kinda\n" +
    "feels like a warm hug.\n" +
    "\n" +
    "00:00:10.500 --> 00:00:13.536\n" +
    "Just be yourself and\n" +
    "everything's gonna be okay.\n" +
    "\n" +
    "00:00:13.536 --> 00:00:16.770\n" +
    "It feels kind of\n" +
    "empathetic, understanding.\n" +
    "\n" +
    "00:00:16.770 --> 00:00:18.030\n" +
    "It's like, yeah, you're right.\n" +
    "\n" +
    "00:00:18.030 --> 00:00:19.313\n" +
    "I can just be myself.\n" +
    "\n" +
    "00:00:19.313 --> 00:00:20.790\n" +
    "That sounds fantastic.\n" +
    "\n" +
    "00:00:20.790 --> 00:00:22.500\n" +
    "I don't have to be anything that I'm not.\n" +
    "\n" +
    "00:00:22.500 --> 00:00:25.730\n" +
    "Just be yourself feels like\n" +
    "it really cares about you,\n" +
    "\n" +
    "00:00:25.730 --> 00:00:29.357\n" +
    "despite the fact that nobody\n" +
    "really follows that advice\n" +
    "\n" +
    "00:00:29.357 --> 00:00:31.490\n" +
    "because you can't really follow it.\n" +
    "\n" +
    "00:00:31.490 --> 00:00:34.121\n" +
    "Everybody is a chameleon of sorts.\n" +
    "\n" +
    "00:00:34.121 --> 00:00:36.450\n" +
    "When you're around the boys having a beer,\n" +
    "\n" +
    "00:00:36.450 --> 00:00:37.950\n" +
    "you're gonna act way differently\n" +
    "\n" +
    "00:00:37.950 --> 00:00:39.810\n" +
    "than you do when you're around your mom.\n" +
    "\n" +
    "00:00:39.810 --> 00:00:41.250\n" +
    "When you're at a job interview,\n" +
    "\n" +
    "00:00:41.250 --> 00:00:44.040\n" +
    "you're going to be all\n" +
    "proper and professional\n" +
    "\n" +
    "00:00:44.040 --> 00:00:45.780\n" +
    "and maybe a little bit personable,\n" +
    "\n" +
    "00:00:45.780 --> 00:00:47.610\n" +
    "way more charming than you would\n" +
    "\n" +
    "00:00:47.610 --> 00:00:50.130\n" +
    "if you're just relaxing on the couch\n" +
    "\n" +
    "00:00:50.130 --> 00:00:52.110\n" +
    "devolving into degeneracy,\n" +
    "\n" +
    "00:00:52.110 --> 00:00:53.940\n" +
    "trying to watch something on Netflix.\n" +
    "\n" +
    "00:00:53.940 --> 00:00:56.196\n" +
    "We do this because we kind of have to.\n" +
    "\n" +
    "00:00:56.196 --> 00:00:58.324\n" +
    "Different situations that we're in\n" +
    "\n" +
    "00:00:58.324 --> 00:01:02.101\n" +
    "recruit different parts\n" +
    "of us, different emphases.\n" +
    "\n" +
    "00:01:02.101 --> 00:01:04.465\n" +
    "Sometimes we have to be professional,\n" +
    "\n" +
    "00:01:04.465 --> 00:01:07.170\n" +
    "other times we have to be\n" +
    "very charming and funny\n" +
    "\n" +
    "00:01:07.170 --> 00:01:08.520\n" +
    "like I'm doing right now.\n" +
    "\n" +
    "00:01:08.520 --> 00:01:09.840\n" +
    "I'm not like this in real life,\n" +
    "\n" +
    "00:01:09.840 --> 00:01:11.161\n" +
    "but I've gotta film a Better Ideas video\n" +
    "\n" +
    "00:01:11.161 --> 00:01:14.490\n" +
    "so I sound super smart and\n" +
    "personable and relatable.\n" +
    "\n" +
    "00:01:14.490 --> 00:01:15.510\n" +
    "The point I'm trying to make\n" +
    "\n" +
    "00:01:15.510 --> 00:01:18.465\n" +
    "is that are we ever really ourselves?\n" +
    "\n" +
    "00:01:18.465 --> 00:01:21.030\n" +
    "What does it mean to be ourselves?\n" +
    "\n" +
    "00:01:21.030 --> 00:01:23.820\n" +
    "And is it something that\n" +
    "we should strive to be?\n" +
    "\n" +
    "00:01:23.820 --> 00:01:25.950\n" +
    "Because just be yourself\n" +
    "\n" +
    "00:01:25.950 --> 00:01:27.150\n" +
    "has become something\n" +
    "\n" +
    "00:01:27.150 --> 00:01:30.180\n" +
    "that we've been conditioned\n" +
    "to believe is true\n" +
    "\n" +
    "00:01:30.180 --> 00:01:31.650\n" +
    "based on repetition.\n" +
    "\n" +
    "00:01:31.650 --> 00:01:33.270\n" +
    "Maybe the Walt Disney company\n" +
    "\n" +
    "00:01:33.270 --> 00:01:36.041\n" +
    "got us all believing that\n" +
    "we should just be ourselves,\n" +
    "\n" +
    "00:01:36.041 --> 00:01:38.100\n" +
    "make our dreams come true,\n" +
    "\n" +
    "00:01:38.100 --> 00:01:39.120\n" +
    "follow our heart,\n" +
    "\n" +
    "00:01:39.120 --> 00:01:40.350\n" +
    "find our passion.\n" +
    "\n" +
    "00:01:40.350 --> 00:01:41.730\n" +
    "All of these bubblegum,\n" +
    "\n" +
    "00:01:41.730 --> 00:01:44.340\n" +
    "cotton candy, birthday card sentiments\n" +
    "\n" +
    "00:01:44.340 --> 00:01:46.109\n" +
    "that all sound very comforting\n" +
    "\n" +
    "00:01:46.109 --> 00:01:48.330\n" +
    "but don't really mean anything\n" +
    "\n" +
    "00:01:48.330 --> 00:01:51.270\n" +
    "and are impossible to\n" +
    "just apply to your life.\n" +
    "\n" +
    "00:01:51.270 --> 00:01:52.890\n" +
    "We hear these things so often,\n" +
    "\n" +
    "00:01:52.890 --> 00:01:55.361\n" +
    "they've become utterly meaningless.\n" +
    "\n" +
    "00:01:55.361 --> 00:01:57.402\n" +
    "Nobody's life was ever changed\n" +
    "\n" +
    "00:01:57.402 --> 00:01:59.707\n" +
    "by somebody saying to them, \"Hey,\n" +
    "\n" +
    "00:01:59.707 --> 00:02:01.377\n" +
    "\"just follow your dreams.\"\n" +
    "\n" +
    "00:02:02.670 --> 00:02:03.503\n" +
    "What does that mean?\n" +
    "\n" +
    "00:02:03.503 --> 00:02:05.760\n" +
    "I've had some pretty\n" +
    "(beep) up dreams in my day.\n" +
    "\n" +
    "00:02:05.760 --> 00:02:07.920\n" +
    "And if we were to follow those dreams,\n" +
    "\n" +
    "00:02:07.920 --> 00:02:09.030\n" +
    "we would all be screwed.\n" +
    "\n" +
    "00:02:09.030 --> 00:02:10.110\n" +
    "God help us all.\n" +
    "\n" +
    "00:02:10.110 --> 00:02:11.763\n" +
    "And follow your passion,\n" +
    "\n" +
    "00:02:11.763 --> 00:02:14.070\n" +
    "most people that you talk to\n" +
    "\n" +
    "00:02:14.070 --> 00:02:16.350\n" +
    "have no idea what their passion is.\n" +
    "\n" +
    "00:02:16.350 --> 00:02:17.790\n" +
    "They have things they're interested in,\n" +
    "\n" +
    "00:02:17.790 --> 00:02:19.828\n" +
    "probably a bunch of things\n" +
    "they're interested in,\n" +
    "\n" +
    "00:02:19.828 --> 00:02:22.440\n" +
    "but there's a lot of pressure in like, oh,\n" +
    "\n" +
    "00:02:22.440 --> 00:02:24.510\n" +
    "find your passion and\n" +
    "everything's gonna work out.\n" +
    "\n" +
    "00:02:24.510 --> 00:02:25.500\n" +
    "There's a lot of pressure in that\n" +
    "\n" +
    "00:02:25.500 --> 00:02:28.140\n" +
    "because people get analysis paralysis.\n" +
    "\n" +
    "00:02:28.140 --> 00:02:30.120\n" +
    "They have no idea which passion to pick.\n" +
    "\n" +
    "00:02:30.120 --> 00:02:31.560\n" +
    "What's gonna be the one thing\n" +
    "\n" +
    "00:02:31.560 --> 00:02:33.420\n" +
    "that makes everything make sense?\n" +
    "\n" +
    "00:02:33.420 --> 00:02:35.940\n" +
    "And again, I think that we tend to agree\n" +
    "\n" +
    "00:02:35.940 --> 00:02:37.057\n" +
    "with these taglines,\n" +
    "\n" +
    "00:02:37.057 --> 00:02:40.410\n" +
    "not because they're\n" +
    "particularly instructional,\n" +
    "\n" +
    "00:02:40.410 --> 00:02:42.810\n" +
    "but because they sound\n" +
    "like they mean well.\n" +
    "\n" +
    "00:02:42.810 --> 00:02:44.299\n" +
    "They're very easy to swallow.\n" +
    "\n" +
    "00:02:44.299 --> 00:02:47.165\n" +
    "It's never challenging or uncomfortable\n" +
    "\n" +
    "00:02:47.165 --> 00:02:49.918\n" +
    "to believe that the answer\n" +
    "to all of our problems\n" +
    "\n" +
    "00:02:49.918 --> 00:02:52.380\n" +
    "is to just be more of ourselves,\n" +
    "\n" +
    "00:02:52.380 --> 00:02:53.273\n" +
    "whatever that means.\n" +
    "\n" +
    "00:02:53.273 --> 00:02:55.758\n" +
    "But I think that just being yourself\n" +
    "\n" +
    "00:02:55.758 --> 00:02:58.980\n" +
    "is inherently a defeatist statement\n" +
    "\n" +
    "00:02:58.980 --> 00:03:03.690\n" +
    "because just implies that\n" +
    "yourself is something to just be.\n" +
    "\n" +
    "00:03:03.690 --> 00:03:06.333\n" +
    "It's a reality to regress back to.\n" +
    "\n" +
    "00:03:06.333 --> 00:03:09.827\n" +
    "It tells you to stop\n" +
    "reaching and stop pursuing\n" +
    "\n" +
    "00:03:09.827 --> 00:03:13.650\n" +
    "and just be you because you're just you.\n" +
    "\n" +
    "00:03:13.650 --> 00:03:15.895\n" +
    "It's an inherently pessimistic statement\n" +
    "\n" +
    "00:03:15.895 --> 00:03:18.600\n" +
    "veiled in self-congratulation.\n" +
    "\n" +
    "00:03:18.600 --> 00:03:21.630\n" +
    "A statement that doesn't\n" +
    "want the best for you,\n" +
    "\n" +
    "00:03:21.630 --> 00:03:24.252\n" +
    "a statement that doesn't\n" +
    "care about your ideals,\n" +
    "\n" +
    "00:03:24.252 --> 00:03:27.210\n" +
    "your conception of a brighter future.\n" +
    "\n" +
    "00:03:27.210 --> 00:03:30.750\n" +
    "It's a statement that\n" +
    "encourages you to stop growing.\n" +
    "\n" +
    "00:03:30.750 --> 00:03:31.915\n" +
    "But riddle me this,\n" +
    "\n" +
    "00:03:31.915 --> 00:03:36.300\n" +
    "why just be yourself when\n" +
    "you can be so much more?\n" +
    "\n" +
    "00:03:36.300 --> 00:03:38.010\n" +
    "Now you might think to yourself, well,\n" +
    "\n" +
    "00:03:38.010 --> 00:03:40.080\n" +
    "I can only just be myself, right?\n" +
    "\n" +
    "00:03:40.080 --> 00:03:43.110\n" +
    "If I'm always striving\n" +
    "to be more than myself\n" +
    "\n" +
    "00:03:43.110 --> 00:03:45.450\n" +
    "then I will never feel okay with myself.\n" +
    "\n" +
    "00:03:45.450 --> 00:03:46.950\n" +
    "I'll never feel comforted.\n" +
    "\n" +
    "00:03:46.950 --> 00:03:48.845\n" +
    "I'll never feel okay with who I am,\n" +
    "\n" +
    "00:03:48.845 --> 00:03:52.260\n" +
    "and instead I will hold this\n" +
    "future version of myself\n" +
    "\n" +
    "00:03:52.260 --> 00:03:54.253\n" +
    "in front of me like a carrot to a mule,\n" +
    "\n" +
    "00:03:54.253 --> 00:03:56.040\n" +
    "hamster wheeling myself,\n" +
    "\n" +
    "00:03:56.040 --> 00:03:59.723\n" +
    "I guess mule wheeling yourself\n" +
    "right into your grave.\n" +
    "\n" +
    "00:03:59.723 --> 00:04:02.380\n" +
    "You'll never be able to\n" +
    "stop and smell the roses.\n" +
    "\n" +
    "00:04:02.380 --> 00:04:04.717\n" +
    "You'll always be looking\n" +
    "for the next thing.\n" +
    "\n" +
    "00:04:04.717 --> 00:04:06.088\n" +
    "Goals and goals and goals.\n" +
    "\n" +
    "00:04:06.088 --> 00:04:08.160\n" +
    "And you'll be searching for a peace\n" +
    "\n" +
    "00:04:08.160 --> 00:04:10.290\n" +
    "that you could find in the present moment.\n" +
    "\n" +
    "00:04:10.290 --> 00:04:12.090\n" +
    "And while I understand this argument,\n" +
    "\n" +
    "00:04:12.090 --> 00:04:14.040\n" +
    "I also think it's very shortsighted.\n" +
    "\n" +
    "00:04:14.040 --> 00:04:15.390\n" +
    "It doesn't take into account\n" +
    "\n" +
    "00:04:15.390 --> 00:04:17.820\n" +
    "the bigger picture of the human brain,\n" +
    "\n" +
    "00:04:17.820 --> 00:04:19.680\n" +
    "and that is that, yes,\n" +
    "\n" +
    "00:04:19.680 --> 00:04:23.550\n" +
    "we do need to feel satisfied\n" +
    "and happy with what we have.\n" +
    "\n" +
    "00:04:23.550 --> 00:04:27.785\n" +
    "That's what serotonin and\n" +
    "oxytocin and endorphins are for.\n" +
    "\n" +
    "00:04:27.785 --> 00:04:30.540\n" +
    "They're all for feeling\n" +
    "good in the present moment.\n" +
    "\n" +
    "00:04:30.540 --> 00:04:33.120\n" +
    "It's a very important\n" +
    "system of our psychology,\n" +
    "\n" +
    "00:04:33.120 --> 00:04:35.580\n" +
    "but potentially way more influential\n" +
    "\n" +
    "00:04:35.580 --> 00:04:37.590\n" +
    "and important for our survival\n" +
    "\n" +
    "00:04:37.590 --> 00:04:39.120\n" +
    "is our dopamine system.\n" +
    "\n" +
    "00:04:39.120 --> 00:04:41.760\n" +
    "And dopamine is all about motivation.\n" +
    "\n" +
    "00:04:41.760 --> 00:04:43.740\n" +
    "If somebody were to\n" +
    "delete all the dopamine\n" +
    "\n" +
    "00:04:43.740 --> 00:04:45.000\n" +
    "in your brain right now\n" +
    "\n" +
    "00:04:45.000 --> 00:04:47.592\n" +
    "so you couldn't feel a lick of dopamine,\n" +
    "\n" +
    "00:04:47.592 --> 00:04:51.120\n" +
    "you would lay down in whatever\n" +
    "chair you're sitting on\n" +
    "\n" +
    "00:04:51.120 --> 00:04:54.330\n" +
    "because you'd probably not\n" +
    "have the motivation to sit down\n" +
    "\n" +
    "00:04:54.330 --> 00:04:56.670\n" +
    "and you would never lift\n" +
    "a finger to do anything.\n" +
    "\n" +
    "00:04:56.670 --> 00:04:57.690\n" +
    "You would pee your pants\n" +
    "\n" +
    "00:04:57.690 --> 00:04:59.712\n" +
    "because you wouldn't be\n" +
    "motivated to go to the bathroom.\n" +
    "\n" +
    "00:04:59.712 --> 00:05:01.890\n" +
    "You wouldn't get up to eat anything.\n" +
    "\n" +
    "00:05:01.890 --> 00:05:03.810\n" +
    "You would literally lay there and die.\n" +
    "\n" +
    "00:05:03.810 --> 00:05:05.340\n" +
    "We need motivation\n" +
    "\n" +
    "00:05:05.340 --> 00:05:08.520\n" +
    "to go get things that\n" +
    "we don't already have.\n" +
    "\n" +
    "00:05:08.520 --> 00:05:11.190\n" +
    "It's the only reason why\n" +
    "you're alive right now.\n" +
    "\n" +
    "00:05:11.190 --> 00:05:14.520\n" +
    "So in a way, motivation is the desire\n" +
    "\n" +
    "00:05:14.520 --> 00:05:17.456\n" +
    "to attain something that\n" +
    "we don't already have.\n" +
    "\n" +
    "00:05:17.456 --> 00:05:21.510\n" +
    "It's something that requires\n" +
    "us to move in space and time\n" +
    "\n" +
    "00:05:21.510 --> 00:05:22.350\n" +
    "to go get,\n" +
    "\n" +
    "00:05:22.350 --> 00:05:24.120\n" +
    "and that will never go away, right?\n" +
    "\n" +
    "00:05:24.120 --> 00:05:26.738\n" +
    "We will always be\n" +
    "motivated to do something.\n" +
    "\n" +
    "00:05:26.738 --> 00:05:30.720\n" +
    "The question is, what are we\n" +
    "locking our motivation into?\n" +
    "\n" +
    "00:05:30.720 --> 00:05:31.696\n" +
    "Is it Netflix?\n" +
    "\n" +
    "00:05:31.696 --> 00:05:33.213\n" +
    "Is it social media?\n" +
    "\n" +
    "00:05:33.213 --> 00:05:36.390\n" +
    "Is it buying frivolous things?\n" +
    "\n" +
    "00:05:36.390 --> 00:05:38.280\n" +
    "No judgment,\n" +
    "\n" +
    "00:05:38.280 --> 00:05:40.620\n" +
    "I'm just saying that it's\n" +
    "locked into something.\n" +
    "\n" +
    "00:05:40.620 --> 00:05:43.530\n" +
    "So since we have this profound desire\n" +
    "\n" +
    "00:05:43.530 --> 00:05:46.320\n" +
    "to achieve things that we\n" +
    "haven't already achieved\n" +
    "\n" +
    "00:05:46.320 --> 00:05:49.020\n" +
    "or to get things that\n" +
    "we don't already have,\n" +
    "\n" +
    "00:05:49.020 --> 00:05:50.910\n" +
    "what better thing is there\n" +
    "\n" +
    "00:05:50.910 --> 00:05:53.679\n" +
    "to lock our motivation system into\n" +
    "\n" +
    "00:05:53.679 --> 00:05:56.730\n" +
    "than being the best version of ourselves\n" +
    "\n" +
    "00:05:56.730 --> 00:05:59.340\n" +
    "so that that we can be\n" +
    "more capable people,\n" +
    "\n" +
    "00:05:59.340 --> 00:06:00.851\n" +
    "capable of helping ourselves\n" +
    "\n" +
    "00:06:00.851 --> 00:06:02.694\n" +
    "get through the hardships of life\n" +
    "\n" +
    "00:06:02.694 --> 00:06:04.440\n" +
    "so that we can help others\n" +
    "\n" +
    "00:06:04.440 --> 00:06:06.420\n" +
    "get through the hardships in their lives,\n" +
    "\n" +
    "00:06:06.420 --> 00:06:08.850\n" +
    "essentially making the\n" +
    "world a better place\n" +
    "\n" +
    "00:06:08.850 --> 00:06:10.770\n" +
    "through being the best we can be.\n" +
    "\n" +
    "00:06:10.770 --> 00:06:13.534\n" +
    "So I think that two things\n" +
    "can be true at the same time.\n" +
    "\n" +
    "00:06:13.534 --> 00:06:16.380\n" +
    "We can both strive for greatness\n" +
    "\n" +
    "00:06:16.380 --> 00:06:18.086\n" +
    "and be the best that we can be,\n" +
    "\n" +
    "00:06:18.086 --> 00:06:21.360\n" +
    "not settling for just being ourselves.\n" +
    "\n" +
    "00:06:21.360 --> 00:06:22.620\n" +
    "But at the same time,\n" +
    "\n" +
    "00:06:22.620 --> 00:06:26.550\n" +
    "having honesty and compassion\n" +
    "for wherever we are now.\n" +
    "\n" +
    "00:06:26.550 --> 00:06:27.383\n" +
    "But a lot of the time,\n" +
    "\n" +
    "00:06:27.383 --> 00:06:31.661\n" +
    "we have very weird\n" +
    "tendencies and behaviors\n" +
    "\n" +
    "00:06:31.661 --> 00:06:34.672\n" +
    "that we think are just\n" +
    "a part of who we are,\n" +
    "\n" +
    "00:06:34.672 --> 00:06:36.720\n" +
    "but in fact they are behaviors\n" +
    "\n" +
    "00:06:36.720 --> 00:06:38.790\n" +
    "that we learned through trauma\n" +
    "\n" +
    "00:06:38.790 --> 00:06:40.710\n" +
    "or the role that we played\n" +
    "\n" +
    "00:06:40.710 --> 00:06:42.796\n" +
    "in our friends group or our family\n" +
    "\n" +
    "00:06:42.796 --> 00:06:46.500\n" +
    "that lead us to do things\n" +
    "that don't actually serve us,\n" +
    "\n" +
    "00:06:46.500 --> 00:06:47.749\n" +
    "they don't serve others.\n" +
    "\n" +
    "00:06:47.749 --> 00:06:51.330\n" +
    "And all in all, they're just a negative.\n" +
    "\n" +
    "00:06:51.330 --> 00:06:53.656\n" +
    "Even though it's like,\n" +
    "oh, that's just me, ha-ha,\n" +
    "\n" +
    "00:06:53.656 --> 00:06:55.050\n" +
    "you'd be surprised\n" +
    "\n" +
    "00:06:55.050 --> 00:06:59.402\n" +
    "how many aspects of your\n" +
    "personality are improvable.\n" +
    "\n" +
    "00:06:59.402 --> 00:07:00.630\n" +
    "You might think\n" +
    "\n" +
    "00:07:00.630 --> 00:07:03.930\n" +
    "that it's just a little quirk\n" +
    "or insanity that you have,\n" +
    "\n" +
    "00:07:03.930 --> 00:07:07.526\n" +
    "but consider the fact\n" +
    "that you can improve it.\n" +
    "\n" +
    "00:07:07.526 --> 00:07:12.000\n" +
    "You can modify your behavior\n" +
    "and your thought patterns\n" +
    "\n" +
    "00:07:12.000 --> 00:07:13.350\n" +
    "to better serve you.\n" +
    "\n" +
    "00:07:13.350 --> 00:07:15.240\n" +
    "And things that you previously thought\n" +
    "\n" +
    "00:07:15.240 --> 00:07:18.606\n" +
    "were just part of your\n" +
    "personality or you being you\n" +
    "\n" +
    "00:07:18.606 --> 00:07:20.809\n" +
    "are things that are just a result\n" +
    "\n" +
    "00:07:20.809 --> 00:07:22.590\n" +
    "of the way you are brought up\n" +
    "\n" +
    "00:07:22.590 --> 00:07:25.530\n" +
    "and things that don't actually\n" +
    "help you in the long run.\n" +
    "\n" +
    "00:07:25.530 --> 00:07:29.280\n" +
    "Don't get self-compassion\n" +
    "confused with complacency.\n" +
    "\n" +
    "00:07:29.280 --> 00:07:31.263\n" +
    "For instance, if you had a close friend\n" +
    "\n" +
    "00:07:31.263 --> 00:07:33.540\n" +
    "and he kind of went off the deep end,\n" +
    "\n" +
    "00:07:33.540 --> 00:07:35.970\n" +
    "previously you were really good friends,\n" +
    "\n" +
    "00:07:35.970 --> 00:07:36.930\n" +
    "you got along,\n" +
    "\n" +
    "00:07:36.930 --> 00:07:39.367\n" +
    "and then he started to\n" +
    "become kind of toxic.\n" +
    "\n" +
    "00:07:39.367 --> 00:07:42.450\n" +
    "He started pushing you and others away\n" +
    "\n" +
    "00:07:42.450 --> 00:07:43.680\n" +
    "through his behaviors,\n" +
    "\n" +
    "00:07:43.680 --> 00:07:44.525\n" +
    "through his words.\n" +
    "\n" +
    "00:07:44.525 --> 00:07:46.740\n" +
    "And you're kinda like, what gives?\n" +
    "\n" +
    "00:07:46.740 --> 00:07:47.916\n" +
    "This guy has changed\n" +
    "\n" +
    "00:07:47.916 --> 00:07:50.970\n" +
    "and I don't know if I wanna\n" +
    "be around him anymore,\n" +
    "\n" +
    "00:07:50.970 --> 00:07:52.494\n" +
    "but I do really care about him.\n" +
    "\n" +
    "00:07:52.494 --> 00:07:54.990\n" +
    "But for now, I have to distance myself.\n" +
    "\n" +
    "00:07:54.990 --> 00:07:58.357\n" +
    "If this person were to come\n" +
    "up to you sincerely and say,\n" +
    "\n" +
    "00:07:58.357 --> 00:08:03.093\n" +
    "\"Hey, look, I realize my\n" +
    "behavior was out of line.\n" +
    "\n" +
    "00:08:04.027 --> 00:08:05.677\n" +
    "\"I didn't really realize it at the time,\n" +
    "\n" +
    "00:08:05.677 --> 00:08:09.119\n" +
    "\"but it's become clear to\n" +
    "me that I need to change.\n" +
    "\n" +
    "00:08:09.119 --> 00:08:13.297\n" +
    "\"My words and my actions are\n" +
    "hurting me or hurting others\n" +
    "\n" +
    "00:08:13.297 --> 00:08:14.550\n" +
    "\"and I'm ready to change.\"\n" +
    "\n" +
    "00:08:14.550 --> 00:08:15.817\n" +
    "Would you say, \"No, it's okay.\n" +
    "\n" +
    "00:08:15.817 --> 00:08:16.807\n" +
    "\"Just be yourself.\n" +
    "\n" +
    "00:08:16.807 --> 00:08:17.880\n" +
    "\"You do you.\"\n" +
    "\n" +
    "00:08:17.880 --> 00:08:19.747\n" +
    "You would probably say, \"I agree.\n" +
    "\n" +
    "00:08:19.747 --> 00:08:21.441\n" +
    "\"Your behavior was out of line.\n" +
    "\n" +
    "00:08:21.441 --> 00:08:23.947\n" +
    "\"I'm so glad that you can see that.\n" +
    "\n" +
    "00:08:23.947 --> 00:08:25.417\n" +
    "\"And since I care about you,\n" +
    "\n" +
    "00:08:25.417 --> 00:08:29.137\n" +
    "\"I really want to help you be\n" +
    "the best version of yourself\n" +
    "\n" +
    "00:08:29.137 --> 00:08:31.267\n" +
    "\"so that you can serve yourself better\n" +
    "\n" +
    "00:08:31.267 --> 00:08:34.200\n" +
    "\"and get along with everybody,\" right?\n" +
    "\n" +
    "00:08:34.200 --> 00:08:36.360\n" +
    "I want you to be the best you can be.\n" +
    "\n" +
    "00:08:36.360 --> 00:08:39.330\n" +
    "And it's funny because loving that person\n" +
    "\n" +
    "00:08:39.330 --> 00:08:42.240\n" +
    "isn't just permitting\n" +
    "them to do their thing\n" +
    "\n" +
    "00:08:42.240 --> 00:08:44.220\n" +
    "and be who they are and whatever,\n" +
    "\n" +
    "00:08:44.220 --> 00:08:45.600\n" +
    "that's complacency.\n" +
    "\n" +
    "00:08:45.600 --> 00:08:47.430\n" +
    "Since you care about that person,\n" +
    "\n" +
    "00:08:47.430 --> 00:08:50.430\n" +
    "you want to help them be the\n" +
    "best version of themselves.\n" +
    "\n" +
    "00:08:50.430 --> 00:08:54.090\n" +
    "I truly believe that we need\n" +
    "to treat ourselves like this.\n" +
    "\n" +
    "00:08:54.090 --> 00:08:57.321\n" +
    "We need to treat ourselves\n" +
    "like we have inherent dignity,\n" +
    "\n" +
    "00:08:57.321 --> 00:08:59.400\n" +
    "like we are on our own side\n" +
    "\n" +
    "00:08:59.400 --> 00:09:01.140\n" +
    "and we want the best for ourselves.\n" +
    "\n" +
    "00:09:01.140 --> 00:09:02.160\n" +
    "And a lot of the time,\n" +
    "\n" +
    "00:09:02.160 --> 00:09:05.280\n" +
    "we don't treat ourselves with\n" +
    "the dignity that we deserve.\n" +
    "\n" +
    "00:09:05.280 --> 00:09:07.320\n" +
    "Our behaviors and our actions\n" +
    "\n" +
    "00:09:07.320 --> 00:09:09.930\n" +
    "or maybe habits or ways of thinking\n" +
    "\n" +
    "00:09:09.930 --> 00:09:12.134\n" +
    "or thought patterns that we have,\n" +
    "\n" +
    "00:09:12.134 --> 00:09:15.270\n" +
    "that we've had since the dawn of time,\n" +
    "\n" +
    "00:09:15.270 --> 00:09:16.614\n" +
    "as long as we can remember,\n" +
    "\n" +
    "00:09:16.614 --> 00:09:20.580\n" +
    "are proving with time to not serve us,\n" +
    "\n" +
    "00:09:20.580 --> 00:09:21.683\n" +
    "to be destructive.\n" +
    "\n" +
    "00:09:21.683 --> 00:09:24.990\n" +
    "Maybe we learned these\n" +
    "tendencies through childhood\n" +
    "\n" +
    "00:09:24.990 --> 00:09:27.090\n" +
    "and they're just a part of who we are,\n" +
    "\n" +
    "00:09:27.090 --> 00:09:29.460\n" +
    "but they're leading us\n" +
    "to the brink of doom.\n" +
    "\n" +
    "00:09:29.460 --> 00:09:31.893\n" +
    "We gain no traction in our lives.\n" +
    "\n" +
    "00:09:31.893 --> 00:09:35.460\n" +
    "Nothing's working, should\n" +
    "we just be ourselves then?\n" +
    "\n" +
    "00:09:35.460 --> 00:09:36.459\n" +
    "So ask yourself,\n" +
    "\n" +
    "00:09:36.459 --> 00:09:40.710\n" +
    "are you living a life that\n" +
    "reflects your inherent dignity?\n" +
    "\n" +
    "00:09:40.710 --> 00:09:44.280\n" +
    "Are your thoughts, behaviors\n" +
    "and habits serving you?\n" +
    "\n" +
    "00:09:44.280 --> 00:09:46.530\n" +
    "Who do you ideally want to be?\n" +
    "\n" +
    "00:09:46.530 --> 00:09:50.610\n" +
    "And what can you do to help you\n" +
    "become somebody of strength?\n" +
    "\n" +
    "00:09:50.610 --> 00:09:51.837\n" +
    "And the bizarre thing is\n" +
    "\n" +
    "00:09:51.837 --> 00:09:55.500\n" +
    "when we start caring\n" +
    "more about our future,\n" +
    "\n" +
    "00:09:55.500 --> 00:09:56.820\n" +
    "when we have ideals,\n" +
    "\n" +
    "00:09:56.820 --> 00:09:59.190\n" +
    "when we have something to strive towards,\n" +
    "\n" +
    "00:09:59.190 --> 00:10:01.477\n" +
    "we actually start to become more satisfied\n" +
    "\n" +
    "00:10:01.477 --> 00:10:02.970\n" +
    "with the present moment.\n" +
    "\n" +
    "00:10:02.970 --> 00:10:04.950\n" +
    "And especially when\n" +
    "you've been on that path\n" +
    "\n" +
    "00:10:04.950 --> 00:10:05.823\n" +
    "for a little while,\n" +
    "\n" +
    "00:10:05.823 --> 00:10:07.248\n" +
    "you can look to your past\n" +
    "\n" +
    "00:10:07.248 --> 00:10:09.480\n" +
    "and you have a track record of growth.\n" +
    "\n" +
    "00:10:09.480 --> 00:10:11.850\n" +
    "You can be comforted that\n" +
    "you've come a long way,\n" +
    "\n" +
    "00:10:11.850 --> 00:10:13.697\n" +
    "and you can be excited and motivated\n" +
    "\n" +
    "00:10:13.697 --> 00:10:15.690\n" +
    "by the person that you're becoming.\n" +
    "\n" +
    "00:10:15.690 --> 00:10:19.110\n" +
    "Self-satisfaction can't exist in a vacuum.\n" +
    "\n" +
    "00:10:19.110 --> 00:10:21.422\n" +
    "It's impossible to shake our concept\n" +
    "\n" +
    "00:10:21.422 --> 00:10:23.910\n" +
    "of the true, the good and the beautiful.\n" +
    "\n" +
    "00:10:23.910 --> 00:10:27.197\n" +
    "So maybe the answer to life\n" +
    "isn't to just be yourself.\n" +
    "\n" +
    "00:10:27.197 --> 00:10:30.099\n" +
    "Maybe the answer is to\n" +
    "love yourself enough\n" +
    "\n" +
    "00:10:30.099 --> 00:10:31.953\n" +
    "to become something more.\n" +
    "\n" +
    "00:10:34.200 --> 00:10:35.820\n" +
    "A big thank you to Athletic Greens\n" +
    "\n" +
    "00:10:35.820 --> 00:10:37.380\n" +
    "for sponsoring this video.\n" +
    "\n" +
    "00:10:37.380 --> 00:10:41.280\n" +
    "You guys know that AG1 is by\n" +
    "far my favorite supplement\n" +
    "\n" +
    "00:10:41.280 --> 00:10:42.720\n" +
    "on the entire planet.\n" +
    "\n" +
    "00:10:42.720 --> 00:10:45.390\n" +
    "It just makes me feel so\n" +
    "good throughout the day,\n" +
    "\n" +
    "00:10:45.390 --> 00:10:46.710\n" +
    "I almost can't believe it.\n" +
    "\n" +
    "00:10:46.710 --> 00:10:50.040\n" +
    "Packed with over 75 vitamins, minerals,\n" +
    "\n" +
    "00:10:50.040 --> 00:10:52.934\n" +
    "whole foods, sourced\n" +
    "super foods and adaptogens\n" +
    "\n" +
    "00:10:52.934 --> 00:10:54.450\n" +
    "in every single scoop,\n" +
    "\n" +
    "00:10:54.450 --> 00:10:58.428\n" +
    "AG1 is like the mother load\n" +
    "of nutrition for your body.\n" +
    "\n" +
    "00:10:58.428 --> 00:11:01.980\n" +
    "And because the ingredients\n" +
    "are sourced from real foods,\n" +
    "\n" +
    "00:11:01.980 --> 00:11:05.100\n" +
    "it has a high degree of bio availability,\n" +
    "\n" +
    "00:11:05.100 --> 00:11:07.890\n" +
    "which means that your body\n" +
    "doesn't just urinate it out.\n" +
    "\n" +
    "00:11:07.890 --> 00:11:09.390\n" +
    "It can actually soak in\n" +
    "\n" +
    "00:11:09.390 --> 00:11:12.510\n" +
    "and your body can deploy\n" +
    "it in its various systems.\n" +
    "\n" +
    "00:11:12.510 --> 00:11:14.303\n" +
    "So I'd highly recommend joining me\n" +
    "\n" +
    "00:11:14.303 --> 00:11:17.490\n" +
    "in this daily habit that\n" +
    "I do every single day\n" +
    "\n" +
    "00:11:17.490 --> 00:11:19.440\n" +
    "that I've been doing for about two years.\n" +
    "\n" +
    "00:11:19.440 --> 00:11:21.930\n" +
    "So if you use my link in\n" +
    "the description below,\n" +
    "\n" +
    "00:11:21.930 --> 00:11:23.913\n" +
    "Athletic Greens is hooking you guys up\n" +
    "\n" +
    "00:11:23.913 --> 00:11:28.620\n" +
    "with a year's supply of the\n" +
    "vitamin D3 and K2 complex\n" +
    "\n" +
    "00:11:28.620 --> 00:11:30.435\n" +
    "which I also have every single morning,\n" +
    "\n" +
    "00:11:30.435 --> 00:11:34.740\n" +
    "as well as five AG1 travel\n" +
    "packs with your first purchase.\n" +
    "\n" +
    "00:11:34.740 --> 00:11:37.290\n" +
    "So make sure you take\n" +
    "advantage of that offer\n" +
    "\n" +
    "00:11:37.290 --> 00:11:40.110\n" +
    "by clicking on my link\n" +
    "in the description below.\n" +
    "\n" +
    "00:11:40.110 --> 00:11:44.093\n" +
    "Join me on the quest for\n" +
    "body and mental dominance.\n" +
    "\n" +
    "00:11:44.093 --> 00:11:47.160\n" +
    "And thank you Athletic Greens\n" +
    "for sponsoring this video.\n" +
    "\n" +
    "00:11:47.160 --> 00:11:50.880\n" +
    "If you liked this video then\n" +
    "actually hit the like button\n" +
    "\n" +
    "00:11:50.880 --> 00:11:52.500\n" +
    "because that's always a huge help.\n" +
    "\n" +
    "00:11:52.500 --> 00:11:54.570\n" +
    "It helps the video rank better.\n" +
    "\n" +
    "00:11:54.570 --> 00:11:58.470\n" +
    "It shoves my bald head into\n" +
    "other people's homepages,\n" +
    "\n" +
    "00:11:58.470 --> 00:11:59.520\n" +
    "helping them out,\n" +
    "\n" +
    "00:11:59.520 --> 00:12:00.630\n" +
    "which helps me out.\n" +
    "\n" +
    "00:12:00.630 --> 00:12:02.190\n" +
    "So it's a win-win for everybody.\n" +
    "\n" +
    "00:12:02.190 --> 00:12:03.360\n" +
    "If you're lurking here\n" +
    "\n" +
    "00:12:03.360 --> 00:12:04.800\n" +
    "and this is the billionth time\n" +
    "\n" +
    "00:12:04.800 --> 00:12:07.470\n" +
    "that you've seen my face or\n" +
    "watched one of my videos,\n" +
    "\n" +
    "00:12:07.470 --> 00:12:08.758\n" +
    "consider subscribing.\n" +
    "\n" +
    "00:12:08.758 --> 00:12:10.380\n" +
    "I don't think it does anything.\n" +
    "\n" +
    "00:12:10.380 --> 00:12:11.850\n" +
    "I don't think it, I don't know,\n" +
    "\n" +
    "00:12:11.850 --> 00:12:13.890\n" +
    "maybe the algorithm likes it or something.\n" +
    "\n" +
    "00:12:13.890 --> 00:12:14.790\n" +
    "Other than that,\n" +
    "\n" +
    "00:12:14.790 --> 00:12:16.080\n" +
    "thank you so much for watching\n" +
    "\n" +
    "00:12:16.080 --> 00:12:17.980\n" +
    "and we'll catch you in the next video.\n" +
    "\n"
const main = () => {
    const result = parseVttInput(input, 180);
    console.log(result)
}

main()