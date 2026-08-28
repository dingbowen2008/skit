/**
 * conf.js - Embedded configuration data
 * This file mirrors data/conf.json for file:// protocol compatibility.
 * To update config, edit data/conf.json then sync changes here.
 */
const CONF_DATA = {
  "themes": [
    {
      "id": "cicada-chirp",
      "audio": "audio/cicada-chirp.m4a",
      "images": ["theme/cicada-chirp/1.png", "theme/cicada-chirp/2.png", "theme/cicada-chirp/3.png"],
      "cover": "theme/home/cicada-chirp.png",
      "info": {
        "en": {"title": "Cicada Chirp", "location": "Old Trees, Midsummer Woods", "time": "2024‑06‑16 summer afternoon", "description": "Summer cicada songs fill hot days, long and high-pitched, rising one after another. Their buzz is the signature of midsummer, carrying burning summer memories. Continuous sound covers warm afternoons. Listen under leaf-heavy old trees under bright sunlight. This lively noise brings you back to old times, letting you taste summer's passion and leisure."},
        "zh": {"title": "蝉鸣", "location": "盛夏老树", "time": "2024‑06‑16 夏日午后", "description": "夏日的蝉鸣充斥炎热的白天，悠长高亢，一声接一声。它们的嗡鸣是仲夏的标志，承载着灼热的夏日记忆。连绵的声响笼罩温暖的午后。在明亮的阳光下，于枝繁叶茂的老树下聆听。这热闹的鸣声将你带回旧日时光，让你品味夏日的热情与闲适。"}
      }
    },
    {
      "id": "mountain-forest",
      "audio": "audio/mountain-forest.m4a",
      "images": ["theme/mountain-forest/1.png", "theme/mountain-forest/2.png", "theme/mountain-forest/3.png"],
      "cover": "theme/home/mountain-forest.png",
      "info": {
        "en": {"title": "Mountain Forest", "location": "Deep Forest", "time": "2024‑07‑22 morning", "description": "This full forest soundscape weaves wind, leaf rustles and faint animal calls into authentic wilderness. Layers of sound shift between deep quiet and subtle movement. Listening feels like stepping into vast, deep woods. City commotion is blocked by thick trees. Surrender body and mind to the woodland, and embrace the calm atmosphere of untamed nature."},
        "zh": {"title": "山林", "location": "深山密林", "time": "2024‑07‑22 清晨", "description": "这片完整的森林声景将风声、树叶沙沙和微弱的动物叫声编织成真实的荒野。声音的层次在深沉的寂静与细微的动静之间流转。聆听时仿佛步入辽阔幽深的森林。城市的喧嚣被茂密的树木隔绝。将身心交给林间，拥抱未受驯服的大自然的宁静氛围。"}
      }
    },
    {
      "id": "waterfall",
      "audio": "audio/waterfall.m4a",
      "images": ["theme/waterfall/1.png", "theme/waterfall/2.png", "theme/waterfall/3.png"],
      "cover": "theme/home/waterfall.png",
      "info": {
        "en": {"title": "Waterfall", "location": "Mountain Valley", "time": "2024‑08‑03", "description": "Water plunges down from heights and crashes into valley bottoms, creating thunderous echoes. Rushing waterfall roars amid mist, showing magnificent landscape. Ceaseless flowing water is the grand chant of mountains and rivers. Bathed in this sound, you stand beneath falls surrounded by damp spray. Personal troubles grow small, and your soul is stirred by nature's immense power."},
        "zh": {"title": "瀑布", "location": "山谷", "time": "2024‑08‑03", "description": "水流从高处倾泻而下，撞击谷底，发出雷鸣般的回声。奔涌的瀑布在雾气中咆哮，展现出壮丽的景观。不停流淌的水是大山大河宏伟的颂歌。沐浴在这声音中，你站在瀑布下，周围是湿润的水雾。个人的烦恼变得渺小，灵魂被大自然磅礴的力量所震撼。"}
      }
    },
    {
      "id": "spring",
      "audio": "audio/spring.m4a",
      "images": ["theme/spring/1.png", "theme/spring/2.png", "theme/spring/3.png"],
      "cover": "theme/home/spring.png",
      "info": {
        "en": {"title": "Spring", "location": "Hidden Spring", "time": "2024‑09‑07 morning", "description": "Fresh spring bubbles upward from underground, tinkling crystal-clear notes. Water hits bluestone with soft, warm tones, carrying earthy and herbal scent. Its sound flows slow and steady. As you listen, you draw near a hidden spring with cool mist curling up. Anxiety is smoothed by gurgling water, cleansing your mind back to simple, unadorned serenity."},
        "zh": {"title": "泉水", "location": "隐秘泉眼", "time": "2024‑09‑07 清晨", "description": "清澈的泉水从地下涌出，叮咚作响，发出水晶般清亮的声音。水流撞击青石，发出柔和温润的音色，带着泥土与草木的气息。声音缓慢而平稳地流淌。聆听时，你仿佛走近一处隐秘的泉眼，清凉的水汽袅袅升起。焦虑被汩汩的流水抚平，心灵回归简单纯粹的宁静。"}
      }
    },
    {
      "id": "rain-fall",
      "audio": "audio/rain-fall.m4a",
      "images": ["theme/rain-fall/1.png", "theme/rain-fall/2.png", "theme/rain-fall/3.png"],
      "cover": "theme/home/rain-fall.png",
      "info": {
        "en": {"title": "Rain Fall", "location": "Rainy Window", "time": "2024‑10‑12 Rainy Day", "description": "Fine rain falls softly, tapping everything in slow, steady rhythm. Rain threads drift over eaves and plants, spreading sound like a gentle veil covering the world. Listening to rain invites you to slow down. Imagine sitting by a window watching mist spread. Outside noise is shut behind rain curtains, bringing you calm and easy peace unique to rainy days."},
        "zh": {"title": "雨声", "location": "窗前听雨", "time": "2024‑10‑12 雨天", "description": "细雨轻柔地落下，以缓慢而稳定的节奏轻叩万物。雨丝飘过屋檐和草木，声音像一层轻柔的纱幔覆盖世界。听雨让你慢下来。想象坐在窗边看雾气弥漫。外界的喧嚣被雨帘隔绝，带给你雨天独有的宁静与安逸。"}
      }
    },
    {
      "id": "bird-call",
      "audio": "audio/bird-call.m4a",
      "images": ["theme/bird-call/1.png", "theme/bird-call/2.png", "theme/bird-call/3.png"],
      "cover": "theme/home/bird-call.png",
      "info": {
        "en": {"title": "Bird Call", "location": "Forest Canopy", "time": "2024‑11‑05 Dawn", "description": "Clear bird calls travel through woods, echoing among branches. Varied chirps form poems that birds write for morning wilderness. Melodious and bright, they wake the whole forest. While listening, you feel bathed in forest sunrise as all creatures stir awake. Restlessness fades. You touch the light vitality of life and grasp simple, uncomplicated joy."},
        "zh": {"title": "鸟鸣", "location": "林间树冠", "time": "2024‑11‑05 黎明", "description": "清脆的鸟鸣穿过树林，在枝桠间回荡。多样的啁啾是鸟儿为清晨荒野写下的诗篇。悠扬明亮，唤醒了整片森林。聆听时，你仿佛沐浴在森林的日出中，万物苏醒。躁动渐渐消退。你触碰到生命轻盈的活力，把握住简单纯粹的快乐。"}
      }
    },
    {
      "id": "mountain-spring",
      "audio": "audio/mountain-spring.m4a",
      "images": ["theme/mountain-spring/1.png", "theme/mountain-spring/2.png", "theme/mountain-spring/3.png"],
      "cover": "theme/home/mountain-spring.png",
      "info": {
        "en": {"title": "Mountain Spring", "location": "Mountain Valley", "time": "2024‑12‑03", "description": "Mountain spring emerges deep in woods and winds over stones, tinkling through quiet valleys. Water strikes rocks and sprays fine droplets, sounding bright and endless. It is the pure, living voice of wilderness. Close your eyes as if wandering mountain valleys, greeted by cool mist. Running water washes away trivial worries, wrapping your weary heart in crystal-clear tranquility."},
        "zh": {"title": "山涧溪流", "location": "山涧溪谷", "time": "2024‑12‑03", "description": "山泉从密林深处涌出，在石间蜿蜒，叮咚穿过幽静的山谷。水流撞击岩石溅起细碎水珠，声音清亮而绵长。这是荒野纯净而鲜活的声音。闭上眼睛，仿佛漫步于山间溪谷，迎面是清凉的水雾。流水冲刷琐碎的烦恼，用晶莹的安宁包裹你疲惫的心。"}
      }
    },
    {
      "id": "storm",
      "audio": "audio/storm.m4a",
      "images": ["theme/storm/1.png", "theme/storm/2.png", "theme/storm/3.png"],
      "cover": "theme/home/storm.png",
      "info": {
        "en": {"title": "Storm", "location": "Open Field", "time": "2025‑01‑14 Stormy Day", "description": "Wild wind sweeps across the world while heavy rain crashes down. This is the powerful cry of a storm. Wind and rain roar together, pounding everything alive and releasing pent-up energy. The chaos carries not only rage but also raw vitality. Listen to nature's grand momentum. As the roar flows past your ears, inner weariness seems to pour away along with the tempest."},
        "zh": {"title": "暴风雨", "location": "旷野", "time": "2025‑01‑14 暴风天", "description": "狂风席卷大地，暴雨倾泻而下。这是暴风雨有力的呐喊。风雨齐鸣，捶打着世间万物，释放着积蓄的能量。这混乱不仅带着狂怒，也带着原始的生命力。聆听大自然的磅礴气势。当咆哮从耳边流过，内心的疲惫似乎也随着风暴倾泻而去。"}
      }
    },
    {
      "id": "whisper",
      "audio": "audio/whisper.m4a",
      "images": ["theme/whisper/1.png", "theme/whisper/2.png", "theme/whisper/3.png"],
      "cover": "theme/home/whisper.png",
      "info": {
        "en": {"title": "Whisper", "location": "Leafy Woods", "time": "2025‑11‑26 Breeze Day", "description": "Soft wind drifts through woods, countless leaves rub against one another into rustling whispers. There is no intense beat, only gentle murmurs flowing in the air. As wind sweeps branches, sounds rise and fall like quiet stories told by the forest. Immerse yourself under leafy canopies, with sunlight filtering through foliage. Your spirit calms down in this peaceful gift of nature."},
        "zh": {"title": "树叶沙沙声", "location": "浓荫树林", "time": "2025‑11‑26 微风日", "description": "微风穿林而过，无数叶片相互摩挲，发出沙沙的低语。没有强烈的节拍，只有轻柔的低语在空气中流淌。风拂过枝头，声音起伏，像森林讲述的安静故事。置身于浓密的树冠下，阳光透过枝叶洒落。在这份宁静的自然馈赠中，你的心灵归于平静。"}
      }
    },
    {
      "id": "beach",
      "audio": "audio/beach.m4a",
      "images": ["theme/beach/1.png", "theme/beach/2.png", "theme/beach/3.png"],
      "cover": "theme/home/beach.png",
      "info": {
        "en": {"title": "Beach", "location": "Coastline", "time": "2025‑03‑18 Sunset", "description": "Waves kiss the shore while fine sand shifts under flowing water. Instead of roaring surges, you hear soft whispers from the coast. Water brushes across sand again and again, leaving fleeting marks. Listening to this track, you seem to walk barefoot along the beach. Sand slips through toes. Wind washes away worldly worries, leaving behind relaxation and gentle coastal romance."},
        "zh": {"title": "海边沙滩", "location": "海岸线", "time": "2025‑03‑18 日落", "description": "浪花亲吻海岸，细沙在水流下轻轻移动。没有咆哮的波涛，只有海岸轻柔的低语。水一遍又一遍地拂过沙滩，留下转瞬即逝的痕迹。聆听这首曲子，你仿佛赤脚走在沙滩上。细沙从趾间滑落。海风吹走尘世的烦恼，留下松弛与温柔的海滨浪漫。"}
      }
    },
    {
      "id": "tide",
      "audio": "audio/tide.m4a",
      "images": ["theme/tide/1.png", "theme/tide/2.png", "theme/tide/3.png"],
      "cover": "theme/home/tide.png",
      "info": {
        "en": {"title": "Tide", "location": "Seashore", "time": "2025‑04‑09 Ebb and Flow", "description": "The ebb and flow is the eternal breath of the ocean. Tides creep over the beach and slip back into deep sea in endless cycles. The vast, gentle sound carries salty sea breeze, weaving time into rippling waves. Close your eyes and imagine yourself standing by the coast. As noise fades away, your mind sinks into the quiet, comforting power that only the ocean can bring."},
        "zh": {"title": "潮汐声", "location": "海岸", "time": "2025‑04‑09 潮汐时分", "description": "潮起潮落是大海永恒的呼吸。潮水漫过沙滩，又退回深海，循环往复。辽阔而温柔的声音裹挟着咸咸的海风，将时间织入层层的波浪。闭上眼睛，想象自己站在海岸边。当喧嚣褪去，你的心灵沉入只有大海才能带来的宁静与抚慰之中。"}
      }
    },
    {
      "id": "firewood",
      "audio": "audio/firewood.m4a",
      "images": ["theme/firewood/1.png", "theme/firewood/2.png", "theme/firewood/3.png"],
      "cover": "theme/home/firewood.png",
      "info": {
        "en": {"title": "Firewood", "location": "Campfire Night", "time": "2025‑04‑27 Evening", "description": "Firewood crackles in bonfire, sparks pop softly amid slow, warm sounds. Small bursts of burning branches evoke imagined flames and heat. There is no loud chaos, only cozy whispers of fire. Close your eyes as if sitting around campfire wrapped by night. Warmth rises deep inside you, bringing relaxation and a sense of being sheltered by firelight."},
        "zh": {"title": "篝火", "location": "篝火之夜", "time": "2025‑04‑27 夜晚", "description": "木柴在篝火中噼啪作响，火星在缓慢温暖的声音中轻轻迸溅。燃烧树枝的细碎爆响唤起想象的火焰与热量。没有喧闹的混乱，只有火焰舒适的私语。闭上眼睛，仿佛坐在夜晚环绕的篝火旁。暖意从内心深处升起，带来放松与被火光庇护的安心感。"}
      }
    },
    {
      "id": "thunderstorm-rain",
      "audio": "audio/thunderstorm-rain.m4a",
      "images": ["theme/thunderstorm-rain/1.png", "theme/thunderstorm-rain/2.png", "theme/thunderstorm-rain/3.png"],
      "cover": "theme/home/thunderstorm-rain.png",
      "info": {
        "en": {"title": "Thunderstorm Rain", "location": "Dark Sky", "time": "2025‑05‑21 Night Storm", "description": "Dark clouds roll, thunder rumbles and heavy rain pours down. Low thunder mixes with downpour into grand music of storm. Thunder swells and fades from near to far while rain pours freely. Imagine staying indoors watching tempest sweep the world. Nature's mighty power unfolds by your ears, releasing and easing inner pressure little by little."},
        "zh": {"title": "雷暴雨", "location": "乌云天际", "time": "2025‑05‑21 雷雨之夜", "description": "乌云翻滚，雷声轰鸣，暴雨倾泻。低沉的雷声与大雨交织成风暴的宏大乐章。雷声由近及远地涨落，雨水自由地倾洒。想象待在室内，看着暴风雨席卷世界。大自然的磅礴力量在耳边展开，一点一点地释放和舒缓内心的压力。"}
      }
    },
    {
      "id": "midsummer-night",
      "audio": "audio/midsummer-night.m4a",
      "images": ["theme/midsummer-night/1.png", "theme/midsummer-night/2.png", "theme/midsummer-night/3.png"],
      "cover": "theme/home/midsummer-night.png",
      "info": {
        "en": {"title": "Midsummer Night", "location": "Summer Fields", "time": "2025‑06‑17 Night", "description": "This is the ensemble of midsummer night: insect chirps, soft breeze and faint wind blend together. Free from daytime heat and noise, gentle night spreads over everything. Interwoven bug songs are low whispers of night wilderness. Sink into the sound under starry summer sky with cool wind brushing cheeks. Daytime tiredness fades away in tender nighttime stillness."},
        "zh": {"title": "夏夜", "location": "夏夜田野", "time": "2025‑06‑17 夜晚", "description": "这是仲夏之夜的合奏：虫鸣、微风和隐隐的风声交融在一起。摆脱白天的炎热与喧闹，温柔的夜色笼罩万物。交织的虫歌是夜晚荒野的低语。在繁星满天的夏夜天空下沉入这声音，凉风拂过脸颊。白天的疲惫在夜晚温柔的静谧中消散。"}
      }
    },
    {
      "id": "glaciers",
      "audio": "audio/glaciers.m4a",
      "images": ["theme/glaciers/1.png", "theme/glaciers/2.png", "theme/glaciers/3.png"],
      "cover": "theme/home/glaciers.png",
      "info": {
        "en": {"title": "Glaciers", "location": "High Ice Fields", "time": "2025‑06‑30", "description": "Ice and snow thaw slowly, cold clear water trickles from glaciers. Sounds are crisp and pure, carrying the special freshness of frigid high land. Fragments of ice occasionally tap each other for tiny clear echoes. You seem to stand on remote ice fields met by cold air. Turbulent thoughts are cooled by icy streams, revealing pure poetry where ice meets water."},
        "zh": {"title": "冰川融水", "location": "高原冰原", "time": "2025‑06‑30", "description": "冰雪缓缓消融，寒冷清澈的水从冰川上滴落。声音清脆纯净，带着高寒地带特有的清新。碎冰偶尔相互轻叩，发出细小而清亮的回声。你仿佛站在遥远的冰原上，迎面是冷冽的空气。纷乱的思绪被冰凉的溪流冷却，露出冰水相接处纯净的诗意。"}
      }
    },
    {
      "id": "lotus-pond-rain",
      "audio": "audio/lotus-pond-rain.m4a",
      "images": ["theme/lotus-pond-rain/1.png", "theme/lotus-pond-rain/2.png", "theme/lotus-pond-rain/3.png"],
      "cover": "theme/home/lotus-pond-rain.png",
      "info": {
        "en": {"title": "Lotus Pond Rain", "location": "Lotus Pond", "time": "2025‑07‑11 Rainy Day", "description": "Raindrops strike broad lotus leaves, making full, soft tapping sounds. Beads bounce across pond plants with gentle rippling noise. Rain bathes green lotus foliage and builds misty poetic mood. Picture yourself beside a rainy lotus pond as thin mist rises. Worries are smoothed by rain on leaves. You taste the subtle, elegant poetry of Jiangnan rainy scenery."},
        "zh": {"title": "荷塘雨声", "location": "荷塘", "time": "2025‑07‑11 烟雨时节", "description": "雨滴敲打宽大的荷叶，发出饱满轻柔的拍击声。水珠在池塘植物间跳跃，泛起温柔的涟漪声。雨水沐浴着碧绿的荷叶，营造出迷蒙的诗意氛围。想象自己站在雨中的荷塘边，薄雾升起。烦恼被叶上的雨声抚平。你品味到江南烟雨风景含蓄雅致的诗意。"}
      }
    },
    {
      "id": "brook",
      "audio": "audio/brook.m4a",
      "images": ["theme/brook/1.png", "theme/brook/2.png", "theme/brook/3.png"],
      "cover": "theme/home/brook.png",
      "info": {
        "en": {"title": "Brook", "location": "Forest Brook", "time": "2025‑07‑29", "description": "A lighthearted brook winds onward, tinkling over pebbles in cheerful song. Its rhythm shifts between jumping tinkles and soft murmurs as water keeps flowing forward. Walking beside the stream in imagination, cool mist surrounds you. Chaotic thoughts drift away with running water. Your soul is soothed by lively gentle current, returning to ease and simplicity."},
        "zh": {"title": "小溪", "location": "林间小溪", "time": "2025‑07‑29", "description": "一条欢快的小溪蜿蜒向前，在鹅卵石上叮咚作响，唱着愉悦的歌。它的节奏在跳跃的叮咚与轻柔的低语之间变换，水流不断向前。想象自己沿着溪边漫步，清凉的水雾环绕四周。纷乱的思绪随流水飘远。你的灵魂被活泼而温柔的水流安抚，回归轻松与简单。"}
      }
    },
    {
      "id": "temple-snow",
      "audio": "audio/temple-snow.m4a",
      "images": ["theme/temple-snow/1.png", "theme/temple-snow/2.png", "theme/temple-snow/3.png"],
      "cover": "theme/home/temple-snow.png",
      "info": {
        "en": {"title": "Temple in the Snow", "location": "Mountain Temple", "time": "2025‑12‑24 Winter", "description": "Heavy snow falls silently, covering temple eaves and courtyards. Soft snow brings faint wind murmur as the whole world sinks into hush. All mortal noise is buried beneath white snow. Imagine standing in snow-covered ancient temple. Time stretches slow and long. Burdens slip off your heart as you feel the cool, ethereal Zen mood of snow-draped old shrine."},
        "zh": {"title": "雪中寺庙", "location": "山中古寺", "time": "2025‑12‑24 冬日", "description": "大雪无声地落下，覆盖寺庙的飞檐与庭院。轻柔的雪带着微弱的风声，整个世界陷入寂静。所有凡尘的喧嚣都被白雪掩埋。想象自己站在覆雪的古寺中。时间变得缓慢悠长。当你感受到披雪古刹清冷空灵的禅意，重负从心头滑落。"}
      }
    },
    {
      "id": "nanping-bell",
      "audio": "audio/nanping-bell.m4a",
      "images": ["theme/nanping-bell/1.png", "theme/nanping-bell/2.png", "theme/nanping-bell/3.png"],
      "cover": "theme/home/nanping-bell.png",
      "info": {
        "en": {"title": "Nanping Evening Bell", "location": "Nanping Hill Temple", "time": "2025‑09‑13 Dusk", "description": "Ancient temple bell rings slowly, each note lingering and fading in circles. Deep distant chime pierces twilight and drifts across woods to calm human hearts. Unrushed bell sound carries quiet weight of ages. Dusk falls over old temple in your imagination. Impatience drifts away with reverberations, and you meet peace and timeless Zen within bell tones."},
        "zh": {"title": "寺庙（南屏晚钟）", "location": "南屏山寺", "time": "2025‑09‑13 黄昏", "description": "古寺的钟声缓缓响起，每一记余音都在回环中渐渐消散。深沉悠远的钟声穿透暮色，飘过树林，安抚人心。不疾不徐的钟声承载着岁月静默的重量。想象中，暮色降临古寺。焦躁随着余音飘散，你在钟声中遇见安宁与永恒的禅意。"}
      }
    },
    {
      "id": "bamboo-forest",
      "audio": "audio/bamboo-forest.m4a",
      "images": ["theme/bamboo-forest/1.png", "theme/bamboo-forest/2.png", "theme/bamboo-forest/3.png"],
      "cover": "theme/home/bamboo-forest.png",
      "info": {
        "en": {"title": "Bamboo Forest Wind", "location": "Bamboo Grove", "time": "2025‑09‑28 Windy Day", "description": "Strong wind sweeps bamboo groves; countless stalks rub together to build rustling waves. When wind rises, the whole forest chants in low, elegant chorus. Sounds rise and fall as wind glides over bamboo tops. You wander deep bamboo woods amid faint plant scent. Worldly noise is shut out by bamboo waves. Your spirit settles down within cool, ethereal oriental charm of bamboo forest."},
        "zh": {"title": "风吹竹林", "location": "竹林", "time": "2025‑09‑28 起风之日", "description": "强风吹过竹林，无数竹竿相互摩挲，汇成沙沙的声浪。风起时，整片竹林低吟着优雅的合唱。风掠过竹梢，声音随之起伏。你在竹影深处漫步，闻到隐约的草木清香。尘世的喧嚣被竹浪隔绝。你的心灵在竹林清冷空灵的东方韵味中沉静下来。"}
      }
    },
    {
      "id": "fallen-leaves",
      "audio": "audio/fallen-leaves.m4a",
      "images": ["theme/fallen-leaves/1.png", "theme/fallen-leaves/2.png", "theme/fallen-leaves/3.png"],
      "cover": "theme/home/fallen-leaves.png",
      "info": {
        "en": {"title": "Fallen Leaves", "location": "Autumn Woods", "time": "2025‑11‑17 Rainy Autumn", "description": "Fine drizzle taps dry fallen leaves with soft rustling. Rain beads land on piles of dead foliage, carrying quiet autumn temperament. Small gentle sounds tell stories of seasons without loud outbursts. Wander autumn woods after rain in your mind. Autumn atmosphere spreads with rainfall. Your heart settles low, embracing calm, mild mood of rainy fallen-leaf woods."},
        "zh": {"title": "雨打落叶", "location": "秋林", "time": "2025‑11‑17 秋雨时节", "description": "细雨轻叩干燥的落叶，发出柔软的沙沙声。雨珠落在堆积的枯叶上，带着秋天安静的气质。细小温柔的声音讲述着季节的故事，没有喧哗。在脑海中漫步雨后秋林。秋意随雨蔓延。你的心沉静下来，拥抱雨中落叶林安宁温和的氛围。"}
      }
    },
    {
      "id": "wave-sound",
      "audio": "audio/wave-sound.m4a",
      "images": ["theme/wave-sound/1.png", "theme/wave-sound/2.png", "theme/wave-sound/3.png"],
      "cover": "theme/home/wave-sound.png",
      "info": {
        "en": {"title": "Wave Sound", "location": "Open Sea", "time": "2025‑10‑11", "description": "Ocean waves crash against shore, roar and roll back again and again. More powerful than tides, wave after wave races toward land. Endless surging sound carries the grand spirit of vast sea. Facing boundless ocean in imagination, trivial troubles are washed away by billows. Your mind broadens and resonates with the immense power of open water."},
        "zh": {"title": "海浪声", "location": "外海", "time": "2025‑10‑11白昼", "description": "海浪拍击海岸，咆哮着一次又一次地卷回。比潮汐更有力量，一波接一波地涌向陆地。无尽翻涌的声响承载着浩瀚大海的壮阔精神。在想象中面对无垠的海洋，琐碎的烦恼被波涛冲刷而去。你的心境开阔，与开阔水域的磅礴力量产生共鸣。"}
      }
    },
    {
      "id": "field",
      "audio": "audio/field.m4a",
      "images": ["theme/field/1.png", "theme/field/2.png", "theme/field/3.png"],
      "cover": "theme/home/field.png",
      "info": {
        "en": {"title": "Field", "location": "Wheat Fields", "time": "2026‑04‑06 ", "description": "Wind sweeps across wide wheat fields. Endless grain sways and produces continuous soft rustle. Breeze over boundless farmland is the earth's gentle whisper. Simple pure sound carries scent of soil. Stand amid vast open fields in your imagination. Urban chaos fades far away. You gain solid calm and feel plain, tender gifts granted by mother earth."},
        "zh": {"title": "田野麦田", "location": "麦田", "time": "2026‑04‑06", "description": "风吹过广袤的麦田。无尽的麦穗摇曳，发出连绵轻柔的沙沙声。无垠田野上的微风是大地的轻声低语。简单纯净的声音带着泥土的气息。想象自己站在辽阔的田野中央。城市的纷扰渐渐远去。你获得踏实的平静，感受大地母亲给予的朴素而温柔的馈赠。"}
      }
    },
    {
      "id": "fireplace",
      "audio": "audio/fireplace.m4a",
      "images": ["theme/fireplace/1.png", "theme/fireplace/2.png", "theme/fireplace/3.png"],
      "cover": "theme/home/fireplace.png",
      "info": {
        "en": {"title": "Fireplace Crackle", "location": "Cozy Cottage", "time": "2026‑01‑08 Winter Night", "description": "Firewood burns softly inside the fireplace with low, gentle crackles. Unlike open-air bonfires, it carries the warmth of indoor shelter. Flames flicker and sparks pop now and then. Imagine staying inside a cozy cottage shut off from cold outside. You lay down your weariness and sink into peaceful comfort brought by indoor fire."},
        "zh": {"title": "壁炉燃烧声", "location": "温暖小屋", "time": "2026‑01‑08 冬夜", "description": "木柴在壁炉中轻柔燃烧，发出低沉温和的噼啪声。与户外的篝火不同，它带着室内庇护的温暖。火焰跳动，火花不时迸溅。想象自己待在一间温暖的小屋里，与外面的寒冷隔绝。你放下疲惫，沉入室内炉火带来的安宁与舒适。"}
      }
    },
    {
      "id": "pine-forest",
      "audio": "audio/pine-forest.m4a",
      "images": ["theme/pine-forest/1.png", "theme/pine-forest/2.png", "theme/pine-forest/3.png"],
      "cover": "theme/home/pine-forest.png",
      "info": {
        "en": {"title": "Pine Forest Sough", "location": "Pine Woods", "time": "2026‑02‑15 Windy Day", "description": "Wind sweeps over pine woods and brings rolling pine sough. Different from light rustle of broadleaf trees, pine needles create deep, long-drawn murmurs spreading across valleys. Wander among pines breathing resin-scented air. Earthly chaos drifts away with wind, as you soak in timeless oriental poetry of mountain forest."},
        "zh": {"title": "松涛（风吹松林）", "location": "松林", "time": "2026‑02‑15 起风之日", "description": "风吹过松林，带来层层叠叠的松涛。不同于阔叶树的轻响，松针发出深沉悠长的低语，蔓延过山谷。在松林间漫步，呼吸着带着松脂气息的空气。尘世的纷扰随风飘散，你沉浸在山林永恒东方的诗意之中。"}
      }
    },
    {
      "id": "flower-garden-buzz",
      "audio": "audio/flower-garden-buzz.m4a",
      "images": ["theme/flower-garden-buzz/1.png", "theme/flower-garden-buzz/2.png", "theme/flower-garden-buzz/3.png"],
      "cover": "theme/home/flower-garden-buzz.png",
      "info": {
        "en": {"title": "Flower Garden Buzz", "location": "Spring Garden", "time": "2026‑04‑22 Spring Day", "description": "Under spring sunshine, bees drift among blooming flowers with soft continuous buzzing. This gentle hum is the whisper of spring garden, free from harsh noise. Picture yourself surrounded by blossoms as floral scent floats in air. Tension melts away, you feel the soft, thriving vitality of springtime."},
        "zh": {"title": "花丛蜂鸣", "location": "春日花园", "time": "2026‑04‑22 春日", "description": "春日的阳光下，蜜蜂在盛放的花丛间穿梭，发出轻柔而持续的嗡鸣。这温柔的嗡嗡声是春日花园的低语，没有刺耳的噪音。想象自己被花朵环绕，花香在空气中飘浮。紧绷感消融，你感受到春天柔软蓬勃的生机。"}
      }
    },
    {
      "id": "rain-on-tent",
      "audio": "audio/rain-on-tent.m4a",
      "images": ["theme/rain-on-tent/1.png", "theme/rain-on-tent/2.png", "theme/rain-on-tent/3.png"],
      "cover": "theme/home/rain-on-tent.png",
      "info": {
        "en": {"title": "Rain on Tent", "location": "Wild Camp", "time": "2026‑05‑10 Rainy Night", "description": "Fine rain taps against camping tent canvas, creating muted, steady patter. The tent builds a safe little shelter separating you from outer storm. Rest inside wilderness tent in your imagination. All outside commotion is blocked by canvas. Your mind calms down and enjoys the cozy peace of camping in wild nature."},
        "zh": {"title": "雨打露营帐篷", "location": "野外营地", "time": "2026‑05‑10 雨夜", "description": "细雨敲打露营帐篷的帆布，发出低沉而稳定的啪嗒声。帐篷筑起安全的小小庇护所，将你与外界的风雨隔开。想象自己在荒野的帐篷中休憩。外界的一切喧闹都被帆布挡住。你的心静下来，享受野外露营温暖而宁静的平和。"}
      }
    },
    {
      "id": "calm-lake-ripples",
      "audio": "audio/calm-lake-ripples.m4a",
      "images": ["theme/calm-lake-ripples/1.png", "theme/calm-lake-ripples/2.png", "theme/calm-lake-ripples/3.png"],
      "cover": "theme/home/calm-lake-ripples.png",
      "info": {
        "en": {"title": "Calm Lake Ripples", "location": "Still Lake", "time": "2026‑05‑27 Evening", "description": "Light breeze sweeps across still lake; ripples lap softly against bank in faint gentle sound. No rushing torrents, only the quiet breath of still water. Sit beside the lake in your mind as water ripples slowly. Restlessness is smoothed by calm water. Time slows down, and you embrace clarity and serenity of tranquil lake."},
        "zh": {"title": "静谧湖波", "location": "静谧湖泊", "time": "2026‑05‑27 傍晚", "description": "微风拂过平静的湖面；涟漪轻柔地拍打湖岸，发出细微温和的声响。没有奔涌的急流，只有静水安静的呼吸。在脑海中坐在湖边，湖水缓缓泛起波纹。不安被平静的湖水抚平。时间慢下来，你拥抱静谧湖泊的清澈与安宁。"}
      }
    },
    {
      "id": "grassland-wind",
      "audio": "audio/grassland-wind.m4a",
      "images": ["theme/grassland-wind/1.png", "theme/grassland-wind/2.png", "theme/grassland-wind/3.png"],
      "cover": "theme/home/grassland-wind.png",
      "info": {
        "en": {"title": "Wind over Grassland", "location": "Open Grassland", "time": "2026‑06‑14 Windy Day", "description": "Strong wind travels across boundless grassland. Wild grass sways and produces continuous soft rustle. The open wind carries sense of vast space far different from dense woods. Stand on endless prairie as wind surrounds you. Inner heaviness blows away by wilderness wind, you gain freedom and relief from the grand open land."},
        "zh": {"title": "草原长风", "location": "辽阔草原", "time": "2026‑06‑14 起风之日", "description": "强风掠过无垠的草原。野草摇曳，发出连绵轻柔的沙沙声。开阔的风带来与茂密森林截然不同的辽阔感。站在无边的草原上，风环绕着你。内心的沉重被荒野的风吹散，你在广袤开阔的大地上获得自由与解脱。"}
      }
    },
    {
      "id": "nightingale",
      "audio": "audio/nightingale.m4a",
      "images": ["theme/nightingale/1.png", "theme/nightingale/2.png", "theme/nightingale/3.png"],
      "cover": "theme/home/nightingale.png",
      "info": {
        "en": {"title": "Nightingale Song", "location": "Moonlit Woods", "time": "2026‑06‑29 Night", "description": "Night falls over deep woods. The nightingale sings soft, winding tunes beneath dark sky. Different from bright daytime bird songs, its voice carries tender, distant charm of night. Bathed in moonlit woodland, all commotion fades. You release inner tension and gain soothing quietness unique to night hours."},
        "zh": {"title": "夜莺夜唱", "location": "月光森林", "time": "2026‑06‑29 夜晚", "description": "夜幕降临幽深的树林。夜莺在暗沉的天幕下唱着轻柔婉转的曲调。与白天明亮的鸟鸣不同，它的声音带着夜晚温柔而缥缈的魅力。沐浴在月光下的林间，一切喧嚣消散。你释放内心的紧绷，获得夜晚独有的抚慰与宁静。"}
      }
    },
    {
      "id": "dawn-forest",
      "audio": "audio/dawn-forest.m4a",
      "images": ["theme/dawn-forest/1.png", "theme/dawn-forest/2.png", "theme/dawn-forest/3.png"],
      "cover": "theme/home/dawn-forest.png",
      "info": {
        "en": {"title": "Dawn Forest", "location": "Forest Edge", "time": "2026‑07‑13 Dawn", "description": "Dawn light spills into woods while thin mist shrouds the forest. Sparse bird calls rise little by little as creatures wake from slumber. Sounds unfold gently without loud bustle, filled with soft morning haze. Greet woodland daybreak in your imagination. Your mood unfolds slowly, embracing pure vital breath when night turns to day."},
        "zh": {"title": "林间破晓", "location": "林缘", "time": "2026‑07‑13 黎明", "description": "黎明的光线洒进树林，薄雾笼罩森林。零星的鸟鸣渐渐响起，万物从沉睡中苏醒。声音温柔地展开，没有喧嚣，充满清晨柔和的气息。在想象中迎接林间的破晓。你的心境缓缓舒展，拥抱昼夜交替时纯净的生命气息。"}
      }
    },
    {
      "id": "canyon-wind",
      "audio": "audio/canyon-wind.m4a",
      "images": ["theme/canyon-wind/1.png", "theme/canyon-wind/2.png", "theme/canyon-wind/3.png"],
      "cover": "theme/home/canyon-wind.png",
      "info": {
        "en": {"title": "Canyon Wind", "location": "Deep Canyon", "time": "2026‑08‑11 Windy Day", "description": "Strong wind travels through deep canyon and reverberates among rock walls. The sound turns low and moaning, then unfolds wide and free. Rock surfaces give wind special echo mixed with wild mountain freshness. Stand deep within valley surrounded by cliffs. Earthly troubles are blown away. You feel relief brought by vast open canyon landscape."},
        "zh": {"title": "峡谷长风", "location": "深邃峡谷", "time": "2026‑08‑11 起风之日", "description": "强风穿过深邃的峡谷，在岩壁间回荡。声音变得低沉悠长，随后又开阔奔放。岩石表面赋予风特殊的回声，夹杂着山野的清新。站在被峭壁环绕的深谷之中。尘世的烦恼被吹散。你感受到辽阔峡谷地貌带来的解脱与畅快。"}
      }
    }
  ],
  "settings": {
    "imageInterval": 8000,
    "transitionDuration": 2000,
    "defaultVolume": 0.7
  }
};
