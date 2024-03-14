import { CONFIG } from './config'

export const VALIDGUESSES = [
  'låemie',
  'minnie',
  'vïetke',
  'morhte',
  'rïenge',
  'gaasta',
  'såalka',
  'seente',
  'rærvah',
  'surrie',
  'veapsa',
  'raante',
  'snahta',
  'bööjme',
  'boekte',
  'destie',
  'duahpa',
  'jihkie',
  'nyöjte',
  'skååve',
  'berrie',
  'åejjie',
  'lastes',
  'eejles',
  'krïnte',
  'urteme',
  'vittra',
  'lorhke',
  'smaala',
  'såajoe',
  'jïebne',
  'göökte',
  'vihtie',
  'lulnie',
  'palhte',
  'savhpa',
  'atolle',
  'slabpe',
  'åadtja',
  'leajoe',
  'aernie',
  'raetie',
  'gïerte',
  'vestie',
  'aehtie',
  'seajme',
  'eeleme',
  'styjre',
  'råanja',
  'geahke',
  'årroje',
  'fearoe',
  'sæjkah',
  'maanoe',
  'atovme',
  'baljah',
  'mavhle',
  'tåajje',
  'håajje',
  'spïere',
  'kemije',
  'nænnas',
  'eeptji',
  'neahka',
  'olleme',
  'sjaare',
  'soejme',
  'lavtja',
  'laaroe',
  'lamhpa',
  'eepose',
  'aaltoe',
  'buvmie',
  'sjårka',
  'mavvas',
  'snorre',
  'eetere',
  'jaemie',
  'acijde',
  'klobpe',
  'joptse',
  'aajkoe',
  'prisme',
  'ietnie',
  'jurije',
  'aavsoe',
  'skæjra',
  'drööne',
  'sihkie',
  'jiekie',
  'nalhve',
  'plomme',
  'sååjpe',
  'soelke',
  'dåtnoe',
  'sjalje',
  'njalle',
  'illedh',
  'sabtje',
  'koerve',
  'boehke',
  'seajka',
  'lïknje',
  'hïngse',
  'dåsmas',
  'gaalje',
  'bagete',
  'kåarje',
  'klakke',
  'tjovre',
  'gealta',
  'guvvie',
  'naedie',
  'bïerje',
  'heavve',
  'soeves',
  'murrie',
  'fåarka',
  'tsaffa',
  'aededh',
  'emties',
  'mehkie',
  'kinove',
  'tråare',
  'dojkoe',
  'rïehke',
  'gupmie',
  'æbjodh',
  'klaasa',
  'lihtie',
  'garrah',
  'voeres',
  'våhkoe',
  'staate',
  'mearoe',
  'båskoe',
  'hiblie',
  'gaavoe',
  'ååpsen',
  'eannan',
  'skarke',
  'pleade',
  'dierie',
  'zambie',
  'kåable',
  'ariske',
  'sissie',
  'aarege',
  'laabje',
  'seanse',
  'etnose',
  'juhkoe',
  'tjönne',
  'meedia',
  'poehte',
  'tryjje',
  'raavsa',
  'tjeala',
  'veadta',
  'skeaja',
  'gevsie',
  'giblie',
  'raajoe',
  'gålkoe',
  'tekste',
  'praare',
  'fijrie',
  'pudtie',
  'plåmma',
  'saajve',
  'vyskes',
  'aeredh',
  'prïdte',
  'sïemes',
  'beerve',
  'slasse',
  'baalka',
  'tankse',
  'ruhpie',
  'gåvloe',
  'badten',
  'domene',
  'goehpe',
  'kenyan',
  'aanoje',
  'skïere',
  'dealka',
  'laares',
  'tjovne',
  'jåhkoe',
  'urries',
  'saajle',
  'peovne',
  'jeahna',
  'plassa',
  'raakth',
  'balkoe',
  'spaada',
  'dåaroe',
  'lidtie',
  'såvsoe',
  'tjorme',
  'saarah',
  'låådte',
  'fåanta',
  'baadve',
  'båådts',
  'reelle',
  'snåhta',
  'geavta',
  'letnie',
  'skuffa',
  'aajmoe',
  'govhte',
  'lopmes',
  'gaasse',
  'plïdte',
  'almene',
  'saasne',
  'jïegke',
  'ganhta',
  'fearan',
  'eenjsi',
  'ditnie',
  'sorhpe',
  'daelie',
  'reavsa',
  'jeenje',
  'gæstoe',
  'habjan',
  'reakta',
  'skaave',
  'dovlen',
  'tjïddh',
  'riepie',
  'mæjjah',
  'desnie',
  'hussie',
  'gaahta',
  'daagkh',
  'jaarja',
  'girpie',
  'daatje',
  'tjavla',
  'olkene',
  'gearma',
  'kanine',
  'kebabe',
  'slååne',
  'knavva',
  'seajke',
  'luhkie',
  'rïepse',
  'nuelie',
  'faakse',
  'tjïrrh',
  'jösses',
  'savsah',
  'smïrre',
  'aegkie',
  'mååbpe',
  'abrodh',
  'veaska',
  'amovre',
  'hïehke',
  'haavke',
  'kaaffe',
  'agkere',
  'burtie',
  'sjamma',
  'gadtja',
  'peanna',
  'vealma',
  'hååken',
  'håaloe',
  'ultedh',
  'åvtene',
  'huhtje',
  'boerke',
  'låktja',
  'vealan',
  'båanta',
  'suvlie',
  'koerse',
  'gijjie',
  'træjpa',
  'aajneh',
  'tjaave',
  'læmpoe',
  'aamore',
  'ååvede',
  'hoknge',
  'byjres',
  'njoeve',
  'deajva',
  'nuvpie',
  'saemie',
  'rïekte',
  'ajmoes',
  'såakna',
  'raknge',
  'låajta',
  'fåårme',
  'såådte',
  'staade',
  'dovkes',
  'tjamke',
  'saatna',
  'aavjoe',
  'gåajva',
  'pruvre',
  'tåarje',
  'gaagka',
  'såekie',
  'tråhpa',
  'ïedtes',
  'hojhte',
  'skåape',
  'latjka',
  'huvrie',
  'ahkedh',
  'jåamoe',
  'skaala',
  'mejtie',
  'gadtje',
  'dontje',
  'damtoe',
  'plakta',
  'låhtoe',
  'rïetje',
  'dïjmes',
  'dåmhpa',
  'seksie',
  'gullie',
  'båånte',
  'ruffie',
  'trabpe',
  'baalle',
  'lïjhke',
  'miesie',
  'feasan',
  'skïjre',
  'provne',
  'svaala',
  'kraave',
  'gaatna',
  'iegkie',
  'sveeki',
  'rööjre',
  'rïngke',
  'jiemie',
  'kuvsje',
  'leavla',
  'seknie',
  'voelpe',
  'tjïrre',
  'vaarah',
  'heajne',
  'vïenes',
  'tjupte',
  'tjyöke',
  'batska',
  'mearan',
  'belnie',
  'aerede',
  'speata',
  'tjamki',
  'stööpe',
  'skahte',
  'rupmie',
  'marhta',
  'spaara',
  'suavna',
  'please',
  'krogka',
  'aaloes',
  'håvjan',
  'uvtebe',
  'roejte',
  'råafoe',
  'snadda',
  'dusnie',
  'såasan',
  'barsje',
  'måanta',
  'aevjie',
  'slohte',
  'saajke',
  'distie',
  'klaava',
  'aajkes',
  'jaepie',
  'laaffa',
  'gåhkoe',
  'minuse',
  'duekie',
  'röövre',
  'hapmah',
  'gramme',
  'ålkide',
  'aarebi',
  'orgije',
  'bæjhta',
  'kaarre',
  'påassa',
  'lahkoe',
  'meavra',
  'geajna',
  'jovven',
  'kvæjta',
  'goerve',
  'sjaase',
  'geelle',
  'sjïele',
  'nåalan',
  'gaadte',
  'ermies',
  'leamka',
  'feerje',
  'gamtoe',
  'beajoe',
  'bïehke',
  'laarma',
  'faarka',
  'gïrhpe',
  'jeanoe',
  'spaare',
  'humhke',
  'laakte',
  'bertie',
  'goerne',
  'åejvie',
  'paahke',
  'luvhte',
  'gåbloe',
  'gearts',
  'gåvsan',
  'bongke',
  'livsie',
  'fuarra',
  'joekse',
  'uktsie',
  'tsåaka',
  'leedte',
  'aalloe',
  'psyjke',
  'læbnja',
  'deavja',
  'vïjhte',
  'gåahke',
  'slorve',
  'göökth',
  'gåahta',
  'healma',
  'slipme',
  'seapma',
  'kryjne',
  'veanas',
  'eelege',
  'jåvleh',
  'libyan',
  'smærja',
  'madtan',
  'guksie',
  'skarre',
  'tjoeme',
  'gööles',
  'stihke',
  'gæjman',
  'aevsie',
  'arrije',
  'slåane',
  'unnies',
  'båvloe',
  'veagke',
  'tsarra',
  'gåajra',
  'båaloe',
  'sleeke',
  'dåahka',
  'medtie',
  'voepte',
  'værsja',
  'autore',
  'snavle',
  'abredh',
  'plæjja',
  'stonte',
  'gebrie',
  'nuljes',
  'åektie',
  'darhkh',
  'hïeven',
  'daaroe',
  'gïerve',
  'moenje',
  'jalloe',
  'seejpe',
  'tribpe',
  'giesie',
  'malhte',
  'kraaje',
  'sparra',
  'daable',
  'kabele',
  'jatnan',
  'jarkan',
  'voenge',
  'långkh',
  'låvnan',
  'gedtie',
  'aajroe',
  'voesse',
  'svijje',
  'gaagke',
  'tjovve',
  'savroe',
  'suetie',
  'mïelke',
  'rirvie',
  'baktse',
  'aktesi',
  'gabran',
  'stompe',
  'gamhka',
  'rassja',
  'aktels',
  'ååksje',
  'jåabpa',
  'gorhke',
  'nielje',
  'stiere',
  'snorme',
  'vælloe',
  'diskoe',
  'vaenie',
  'sleaja',
  'gååkse',
  'presse',
  'mårvan',
  'snïjde',
  'aartoe',
  'gåaksa',
  'gaavma',
  'kramme',
  'ektide',
  'låtnoe',
  'aavroe',
  'ajvedh',
  'haarra',
  'åvtele',
  'smædja',
  'mietie',
  'spïele',
  'juamah',
  'hösate',
  'resmie',
  'dibpie',
  'gåajpa',
  'maaske',
  'arovme',
  'dagkoe',
  'sesnie',
  'buerie',
  'klabpa',
  'redtie',
  'slovve',
  'eegedh',
  'tjïdde',
  'tæjmoe',
  'gæjmas',
  'kråave',
  'saajpe',
  'dajjoe',
  'joevje',
  'gåalta',
  'tjijts',
  'prinse',
  'våhkes',
  'fræjma',
  'etihke',
  'buklie',
  'saajse',
  'vijhth',
  'kveene',
  'jïjnje',
  'åålije',
  'bissie',
  'nabtan',
  'vieken',
  'doemes',
  'gåanga',
  'njævka',
  'övtebe',
  'veehte',
  'skagla',
  'maltan',
  'aetsie',
  'luvjie',
  'jånnga',
  'lihpie',
  'dïereh',
  'skoeke',
  'sovhte',
  'våahta',
  'tåarne',
  'veehke',
  'lastoe',
  'læhkoe',
  'huvvie',
  'jåatke',
  'daasta',
  'gyövte',
  'aermie',
  'slikte',
  'gustie',
  'rijmie',
  'jearja',
  'myvhke',
  'bruvse',
  'redmie',
  'asyjle',
  'maalle',
  'faatah',
  'byövle',
  'tjööre',
  'boejpe',
  'bïerne',
  'tjårra',
  'rihrie',
  'dohkoe',
  'duvnie',
  'aeskie',
  'sïeble',
  'laevie',
  'aevtie',
  'buffie',
  'ektine',
  'aajnes',
  'klihte',
  'kromme',
  'bægkoe',
  'måasas',
  'tjogre',
  'neajta',
  'gårroe',
  'jaavoe',
  'faaroe',
  'åvtels',
  'haitin',
  'sïknge',
  'veekes',
  'bïesse',
  'sïerke',
  'ratneh',
  'åpmoeh',
  'naalte',
  'njæssa',
  'råtnoe',
  'hïejne',
  'velvie',
  'pronte',
  'liptie',
  'siltie',
  'aehpie',
  'feadta',
  'åerjie',
  'gaalas',
  'måatoe',
  'gæmpoe',
  'håhkoe',
  'barhve',
  'snajpe',
  'batske',
  'heejja',
  'maelie',
  'sildie',
  'avteli',
  'bïenje',
  'vuelie',
  'kasuse',
  'laante',
  'lustes',
  'hårsoe',
  'sæjlas',
  'dïesve',
  'abpere',
  'dæljah',
  'luspie',
  'lonhte',
  'hammoe',
  'måahte',
  'sïelse',
  'feeste',
  'mearra',
  'mavhka',
  'råålla',
  'avtege',
  'doejka',
  'lïepse',
  'håvkoe',
  'gïevre',
  'spoeje',
  'såapoe',
  'sjïjle',
  'astedh',
  'avijse',
  'krobpe',
  'mearas',
  'skyhte',
  'hïerre',
  'poeeme',
  'råhtoe',
  'vætnoe',
  'vïjhth',
  'nïerre',
  'doerke',
  'faetie',
  'tsalpa',
  'vearka',
  'jåavta',
  'skååpe',
  'gealoe',
  'namhpe',
  'glåvsa',
  'jahkoe',
  'aarvoe',
  'ræjroe',
  'bierie',
  'slaaje',
  'tjodte',
  'girmes',
  'jïjhte',
  'urkies',
  'skinne',
  'vuerie',
  'hearre',
  'nolhpe',
  'stuara',
  'gaalne',
  'buvvie',
  'gernie',
  'suejie',
  'daatoe',
  'paanna',
  'faagka',
  'meadta',
  'trihke',
  'råtjka',
  'foerme',
  'gaasoe',
  'hapsoe',
  'buanna',
  'ööledh',
  'heelpe',
  'ellies',
  'frijje',
  'pragka',
  'staare',
  'dogken',
  'dillie',
  'saavne',
  'skïjle',
  'meahka',
  'harvan',
  'jurrie',
  'skihke',
  'gaajle',
  'agurke',
  'jaarke',
  'lïejve',
  'plöjje',
  'aavhka',
  'laajka',
  'binhte',
  'rïhpes',
  'fåante',
  'hepsie',
  'haltoe',
  'doeske',
  'daknge',
  'vuasta',
  'gaerie',
  'betnie',
  'bååjme',
  'jonnge',
  'njaaka',
  'ståapa',
  'sïejpe',
  'dasmas',
  'dååmpe',
  'haavre',
  'beagka',
  'mannja',
  'gåajpe',
  'gåerie',
  'gabnje',
  'feerti',
  'såedie',
  'nïejte',
  'tjirke',
  'aanodh',
  'gærroe',
  'eeptsh',
  'avtelh',
  'tjækse',
  'jijmie',
  'multie',
  'lomhpe',
  'gåpman',
  'krigke',
  'raavra',
  'vielie',
  'hubrie',
  'nazije',
  'bïevre',
  'eatjah',
  'vaaroe',
  'sylhta',
  'maales',
  'aalmoe',
  'knavka',
  'stæhka',
  'gåabph',
  'raasma',
  'haekie',
  'dæljan',
  'vaatoe',
  'åbrodh',
  'plomma',
  'leejre',
  'moelte',
  'gööjre',
  'spæhta',
  'faajsa',
  'boelve',
  'gaarta',
  'njeana',
  'skijre',
  'praade',
  'lijkie',
  'navhta',
  'bielie',
  'aelies',
  'stuvva',
  'faamoe',
  'nåvhta',
  'gåetie',
  'nïevre',
  'ålkoli',
  'sjeaka',
  'ödeeme',
  'gaahka',
  'hajnas',
  'daaloe',
  'læstoe',
  'tjaana',
  'huvsie',
  'årrodh',
  'någloe',
  'poeete',
  'vïlles',
  'aktore',
  'vaakte',
  'plihke',
  'haarme',
  'væljoe',
  'doekoe',
  'bahhas',
  'gaevie',
  'daavle',
  'jarhpa',
  'guelie',
  'ohkene',
  'målloe',
  'rïetne',
  'sealoe',
  'jaknge',
  'nielke',
  'åmhkes',
  'asvoeh',
  'skovke',
  'rermie',
  'dyntje',
  'dovhke',
  'ranjke',
  'almodh',
  'njurke',
  'joejke',
  'rissie',
  'guhpie',
  'vellie',
  'gaalja',
  'åervie',
  'dihkie',
  'györte',
  'barmah',
  'regije',
  'buvkie',
  'skårja',
  'raaste',
  'dajkoe',
  'gelksh',
  'tjaste',
  'daabla',
  'guvhth',
  'såaste',
  'skaape',
  'heejne',
  'værtan',
  'samkas',
  'plaave',
  'dåavla',
  'seejke',
  'gæjmah',
  'vuekie',
  'viskes',
  'marvan',
  'gïeleh',
  'ræssja',
  'gijmie',
  'daksoe',
  'aalkoe',
  'slærra',
  'haabpe',
  'etuije',
  'ridtje',
  'tjompe',
  'raasja',
  'bïegke',
  'tjïeve',
  'snuvse',
  'smïdde',
  'lahkes',
  'rehpie',
  'jeemeh',
  'aarhte',
  'naskas',
  'gujmie',
  'loemme',
  'tjomme',
  'liekie',
  'hipmie',
  'slobpe',
  'åhtoes',
  'naabre',
  'åajvoe',
  'peruan',
  'kaalve',
  'juasah',
  'tjassa',
  'skabre',
  'suvtie',
  'baktje',
  'vaajja',
  'låamme',
  'sleara',
  'ræjvoe',
  'rïjhke',
  'kreeke',
  'aejvie',
  'molhke',
  'japtse',
  'gæjran',
  'guvsie',
  'eantan',
  'liksie',
  'gohtje',
  'jæjhka',
  'njasve',
  'sjanse',
  'barkoe',
  'åvteli',
  'suevie',
  'tjurre',
  'tjïhke',
  'domhpe',
  'sjïere',
  'gusnie',
  'sïesse',
  'rahtja',
  'gåådte',
  'daajje',
  'gåavan',
  'urpedh',
  'måasoe',
  'sponse',
  'rætnoe',
  'ebrene',
  'månnja',
  'aktene',
  'båaroe',
  'skeara',
  'rååtse',
  'gïehke',
  'sïerre',
  'skælpa',
  'ebries',
  'tåatoe',
  'kaalke',
  'skarpa',
  'hurrie',
  'reeste',
  'laahpe',
  'lïeste',
  'bæjnoe',
  'bupmie',
  'plaane',
  'tjajme',
  'gåevie',
  'åtnose',
  'håljoe',
  'sjïlje',
  'sæjkan',
  'baenie',
  'tjogne',
  'saarke',
  'gurrie',
  'avanse',
  'stabre',
  'iemies',
  'nualan',
  'duavla',
  'værjoe',
  'satnje',
  'taalle',
  'saptja',
  'håjnan',
  'loekte',
  'båvroe',
  'baetjh',
  'loehke',
  'gaarva',
  'litnie',
  'trompe',
  'klikke',
  'skavla',
  'baahka',
  'prijme',
  'halhta',
  'fagkan',
  'pleese',
  'fealla',
  'vadtes',
  'daepie',
  'rastah',
  'jijsie',
  'tjaffa',
  'vipsje',
  'nïehke',
  'voehpe',
  'ijamma',
  'jalnga',
  'jåvsoe',
  'jåårke',
  'fæhtoe',
  'rååjse',
  'reehke',
  'gaarpe',
  'duntje',
  'suarka',
  'vaarta',
  'naurun',
  'heahpa',
  'seabra',
  'stadta',
  'bægkah',
  'gaalle',
  'goelke',
  'åeredh',
  'hurkie',
  'uhtsie',
  'ålkine',
  'faemie',
  'haevie',
  'dulvie',
  'sjålja',
  'sudtie',
  'digkie',
  'darhke',
  'gaknga',
  'båatke',
  'veahka',
  'laesie',
  'tjoeje',
  'luvlie',
  'gærjan',
  'såavra',
  'daaffa',
  'gavles',
  'draage',
  'rovhte',
  'gaajoe',
  'tåasan',
  'bæææææ',
  'senije',
  'peerme',
  'gåajka',
  'homhpe',
  'laajna',
  'nejpie',
  'taatje',
  'vaajes',
  'slamma',
  'båvsan',
  'skovde',
  'hælloe',
  'böönne',
  'sartja',
  'eekedh',
  'dåajme',
  'harvah',
  'neapoe',
  'vööste',
  'varres',
  'jerkie',
  'tjeara',
  'saapma',
  'åavtoe',
  'barras',
  'låahra',
  'laampe',
  'najvan',
  'bajjah',
  'veljie',
  'voepse',
  'råapah',
  'vïelje',
  'gaable',
  'borhke',
  'saajoe',
  'aevies',
  'suelie',
  'njabpe',
  'easkah',
  'saalje',
  'guhkie',
  'håakan',
  'åerije',
  'batjka',
  'ulleme',
  'starne',
  'gaatoe',
  'vïtjve',
  'gællan',
  'aavoes',
  'gåarne',
  'gaamsa',
  'earene',
  'bealan',
  'bïerve',
  'saakoe',
  'luvnie',
  'damtas',
  'barroe',
  'tröjje',
  'aktege',
  'væjroe',
  'bæhtoe',
  'raajne',
  'jovjan',
  'boetje',
  'veatoe',
  'sopmeh',
  'naelie',
  'gaskem',
  'sitnie',
  'rijnie',
  'tïehte',
  'faabne',
  'bilpie',
  'trååle',
  'såelie',
  'behkie',
  'garhpa',
  'mujvie',
  'eeledh',
  'seekte',
  'sïejme',
  'vuaksa',
  'leamoe',
  'gapmah',
  'ihkebe',
  'daamts',
  'ulpedh',
  'sïehke',
  'mæssoe',
  'siente',
  'byjves',
  'åtnoes',
  'hej-jo',
  'guemie',
  'doegka',
  'suajja',
  'snagle',
  'baajka',
  'soejmi',
  'lehkie',
  'taagle',
  'måekie',
  'vöökes',
  'aaptsh',
  'taakoe',
  'tjarki',
  'spïsse',
  'boehth',
  'ålvoes',
  'raajan',
  'volume',
  'ebrien',
  'duelie',
  'pråvka',
  'agente',
  'tjarke',
  'gåarka',
  'böönte',
  'frovve',
  'fahkes',
  'tsåhha',
  'ihkuve',
  'råanje',
  'plïese',
  'bearka',
  'lïevte',
  'daavre',
  'böönna',
  'diekie',
  'söövre',
  'væjrah',
  'snårra',
  'ruaksj',
  'eevedh',
  'bööhke',
  'hamhke',
  'gænnah',
  'åålegh',
  'liemme',
  'nuekie',
  'tsïnne',
  'provsa',
  'sjabre',
  'beassa',
  'gaange',
  'skåara',
  'skojje',
  'ååpere',
  'stavra',
  'jåakoe',
  'sagkes',
  'såvroe',
  'åhtsoe',
  'taavla',
  'sujmie',
  'gihtse',
  'jïjtje',
  'havnan',
  'læhtoe',
  'heaven',
  'eakere',
  'årrome',
  'njoeje',
  'marhte',
  'meanoe',
  'heblie',
  'dïehre',
  'hïegke',
  'lïhtse',
  'boevje',
  'tjæjva',
  'tjalse',
  'ahkeds',
  'heaksa',
  'mubpie',
  'vitnie',
  'dabran',
  'jillie',
  'hearra',
  'etnije',
  'sjalle',
  'stante',
  'bïrhke',
  'fæjjoe',
  'saalme',
  'skiere',
  'klovpe',
  'iehtie',
  'båejme',
  'moevse',
  'veelle',
  'goepme',
  'skaara',
  'rantan',
  'nubpie',
  'laakse',
  'tsavna',
  'repmie',
  'stovle',
  'gaalla',
  'gåavoe',
  'sårkoe',
  'laavke',
  'dåamoe',
  'brååke',
  'boenge',
  'stådte',
  'löönne',
  'beevre',
  'ielmie',
  'fæjran',
  'raavke',
  'raedie',
  'dïegke',
  'bååhne',
  'gadtse',
  'kvihke',
  'slaave',
  'tjitth',
  'rigkie',
  'åeksie',
  'gidtjh',
  'varkes',
  'fragke',
  'jællan',
  'loenne',
  'uvtedh',
  'vealah',
  'haerie',
  'kaanna',
  'bajhke',
  'guaksa',
  'aejrie',
  'muahra',
  'pååjke',
  'gielie',
  'mådtan',
  'tjipte',
  'frïjje',
  'nalhte',
  'draama',
  'laahka',
  'dajjah',
  'håksoe',
  'dïlles',
  'våalah',
  'tjoele',
  'vaalje',
  'byögke',
  'bankes',
  'krohth',
  'væjjoe',
  'haajje',
  'skåake',
  'tjoere',
  'guktie',
  'jåarte',
  'baarve',
  'gallas',
  'ovledh',
  'rïmtje',
  'frïere',
  'javvoe',
  'baakta',
  'tååjje',
  'feagan',
  'laahke',
  'nuepie',
  'ræhpas',
  'easkan',
  'ozovne',
  'gumsie',
  'sïenge',
  'luemie',
  'urijne',
  'laanoe',
  'raejie',
  'fæntoe',
  'loegke',
  'regrie',
  'laktja',
  'iermie',
  'vaerie',
  'tjööke',
  'durrie',
  'båvhla',
  'jesnie',
  'laagne',
  'fobije',
  'gahkes',
  'hohtje',
  'ektede',
  'ollene',
  'lissie',
  'njorke',
  'bïevle',
  'pluvse',
  'heajme',
  'paarre',
  'dervie',
  'deajje',
  'miejse',
  'geerje',
  'liskes',
  'maajke',
  'baalte',
  'puahta',
  'haahte',
  'bampan',
  'skïhpe',
  'eannah',
  'barman',
  'badtse',
  'vuemie',
  'råabpe',
  'vaaloe',
  'hartja',
  'jiesie',
  'maalme',
  'utnedh',
  'stådta',
  'batjke',
  'våaras',
  'raajda',
  'gaavla',
  'neebne',
  'soemke',
  'mierie',
  'söökes',
  'faarme',
  'tråjje',
  'njoere',
  'krïtne',
  'håbloe',
  'tjööse',
  'spijse',
  'laajda',
  'skæhpa',
  'bådtja',
  'krubpe',
  'beetse',
  'trippe',
  'goelpe',
  'leabpa',
  'ålkone',
  'skajje',
  'dåapma',
  'gïeles',
  'loeves',
  'samkan',
  'jallan',
  'klåvva',
  'båarka',
  'måaroe',
  'klavva',
  'læjnoe',
  'jåasan',
  'ruavta',
  'væktoe',
  'mïrhke',
  'laakan',
  'trappe',
  'jaavva',
  'låamma',
  'söövde',
  'ræjtoe',
  'haagre',
  'tjahke',
  'naerie',
  'naemie',
  'dïelme',
  'stijle',
  'snïjpe',
  'sjaaka',
  'ajtodh',
  'tsatka',
  'ååvere',
  'avredh',
  'saakse',
  'maalja',
  'krijse',
  'batnja',
  'soejje',
  'skuvle',
  'daagka',
  'båajme',
  'moduse',
  'plïeje',
  'aerpie',
  'aamhte',
  'smalle',
  'råahke',
  'skoere',
  'pleaja',
  'eabnoe',
  'skælla',
  'sabjan',
  'heekse',
  'prïjre',
  'reejne',
  'måvhta',
  'låapoe',
  'trende',
  'ulmies',
  'vijnie',
  'heejle',
  'lïejpe',
  'råevie',
  'dujmie',
  'mådtoe',
  'dååsme',
  'skåare',
  'abpese',
  'mumije',
  'sjalja',
  'snarra',
  'meagka',
  'dyvhke',
  'sæljoe',
  'jaabne',
  'bijjie',
  'gaalve',
  'jestie',
  'klahke',
  'amijde',
  'uvhtie',
  'nelnie',
  'inhtse',
  'fæjloe',
  'vaajma',
  'jaesie',
  'vienth',
  'suajas',
  'værtoe',
  'baelie',
  'rijsie',
  'healla',
  'jabnoe',
  'snïjre',
  'tråvna',
  'otnege',
  'jehkie',
  'pïenne',
  'rudtje',
  'gïevte',
  'næhtoe',
  'soerme',
  'forume',
  'seamma',
  'muerie',
  'baante',
  'beahka',
  'orhtse',
  'smeele',
  'giltie',
  'göölle',
  'druvva',
  'såahka',
  'lijnie',
  'åvtine',
  'aavtja',
  'lantja',
  'svilke',
  'earhka',
  'ïedtje',
  'dæjman',
  'aajtoe',
  'plusse',
  'sarhke',
  'vaarja',
  'neblie',
  'bacone',
  'laajoe',
  'båadoe',
  'faatna',
  'fyrste',
  'oktegs',
  'gojkoe',
  'suahpa',
  'mievse',
  'baakoe',
  'skoeve',
  'stoere',
  'olkese',
  'byjjes',
  'jerrie',
  'rïevte',
  'raavre',
  'perene',
  'krovne',
  'vååvne',
  'såjjoe',
  'ïentje',
  'skåvla',
  'daaste',
  'håltoe',
  'tjåvva',
  'faasoe',
  'avtene',
  'plapke',
  'juerie',
  'åajvan',
  'spoele',
  'munnie',
  'aavone',
  'nomhpe',
  'aejkie',
  'våaroe',
  'baejie',
  'balhka',
  'råavra',
  'jæssoe',
  'nallan',
  'jarnge',
  'dööres',
  'fæjroe',
  'fokuse',
  'låbloe',
  'nuvvie',
  'hievie',
  'veakoe',
  'heavoe',
  'bisone',
  'leehpe',
  'gåvles',
  'gåekie',
  'kraana',
  'svaale',
  'readma',
  'hïrmes',
  'tjonne',
  'skaale',
  'tïehke',
  'elmede',
  'vijken',
  'learoe',
  'moehte',
  'sermie',
  'brööke',
  'frïede',
  'jïekth',
  'sïehpe',
  'heagke',
  'joknge',
  'baasma',
  'bælloe',
  'låejie',
  'silhke',
  'bïrsje',
  'evtebe',
  'plåave',
  'klæpma',
  'njohke',
  'åarjel',
  'goevte',
  'jïlhts',
  'gaskah',
  'skaada',
  'seadta',
  'skompe',
  'badtje',
  'buvrie',
  'snobpe',
  'skaama',
  'beapma',
  'somhpe',
  'geegke',
  'tjarme',
  'seapan',
  'nållan',
  'klaase',
  'mullie',
  'klahka',
  'gorsje',
  'snårka',
  'gellie',
  'blogge',
  'tjavre',
  'garhpe',
  'vïegke',
  'hïevje',
  'stååte',
  'aevere',
  'vïelle',
  'tjovle',
  'avtebe',
  'ejties',
  'sæjroe',
  'aajege',
  'provre',
  'japtje',
  'tjohpe',
  'kveita',
  'navhra',
  'krogke',
  'jeavoe',
  'kraane',
  'sæjnoe',
  'bihtie',
  'naarpa',
  'lepsie',
  'måltoe',
  'snurke',
  'staala',
  'vöölle',
  'tsurre',
  'namhta',
  'tjovke',
  'koerne',
  'avtels',
  'daaffe',
  'gåante',
  'duvlie',
  'vylles',
  'sneese',
  'bæjhpa',
  'beahke',
  'ojhtan',
  'snaare',
  'gaaroe',
  'fuahta',
  'dïedte',
  'snohke',
  'råffan',
  'umhkie',
  'aevrie',
  'jalhts',
  'najvah',
  'raerie',
  'itjmie',
  'smaave',
  'boerne',
  'vigkie',
  'meejse',
  'sæjtoe',
  'svæhka',
  'svætna',
  'trïhke',
  'åvtese',
  'seerbe',
  'åvtelh',
  'naaloe',
  'vaanoe',
  'snåale',
  'åabtoe',
  'gamhke',
  'gærhka',
  'geerve',
  'muetie',
  'avteld',
  'såafoe',
  'klæjma',
  'saajka',
  'measka',
  'guatja',
  'luejie',
  'sisnie',
  'gussie',
  'galhkh',
  'haalle',
  'tertie',
  'gæjrah',
  'ulvedh',
  'eajtoe',
  'maajsa',
  'hamhpa',
  'påajke',
  'nomene',
  'nårroe',
  'sistie',
  'slaaja',
  'klovse',
  'guanna',
  'kravna',
  'tsårra',
  'dïeske',
  'ruarma',
  'påaste',
  'jyövje',
  'njamma',
  'njarke',
  'hijven',
  'duvrie',
  'kåahke',
  'dallah',
  'skajja',
  'sïejve',
  'laapte',
  'bagkan',
  'ålkene',
  'fellie',
  'sivrie',
  'saanje',
  'kloere',
  'slabre',
  'taavoe',
  'rovhke',
  'nalhke',
  'graade',
  'smohke',
  'tjavle',
  'tjeada',
  'faadta',
  'burman',
  'mongke',
  'amhkes',
  'ragkan',
  'jïenge',
  'reevre',
  'gåmpoe',
  'åavroe',
  'bööneh',
  'ebties',
  'hurvie',
  'baaroe',
  'muevie',
  'meatan',
  'stonke',
  'rïbtje',
  'njabre',
  'gaaloe',
  'oktegh',
  'kragka',
  'lööhpe',
  'slogne',
  'roenge',
  'tjarra',
  'gurvie',
  'riffie',
  'bårman',
  'latjke',
  'vaijde',
  'jåapoe',
  'turrie',
  'leasja',
  'tjahta',
  'slagke',
  'brorke',
  'pæjhpa',
  'reagka',
  'ajpedh',
  'jaktsa',
  'båmmoe',
  'råaksa',
  'daarah',
  'duakan',
  'lïhkes',
  'iemeds',
  'fåvhta',
  'njalke',
  'tjåale',
  'gåabpa',
  'löönes',
  'boelte',
  'muvhte',
  'såvsan',
  'klåare',
  'storke',
  'såarka',
  'eesele',
  'hïjhte',
  'jarhta',
  'hååbje',
  'aaksja',
  'tjarve',
  'gapman',
  'skåave',
  'melkie',
  'luhpie',
  'måerie',
  'tjalke',
  'sjovne',
  'gïngse',
  'sapkes',
  'haamoe',
  'jatsva',
  'bïlles',
  'gæjhta',
  'juvvie',
  'bæjloe',
  'reajna',
  'skanse',
  'ekteli',
  'mijakt',
  'lijmie',
  'yölelh',
  'såavla',
  'gulhke',
  'tsæssa',
  'kråvna',
  'sealma',
  'fylhke',
  'laajta',
  'mådtas',
  'sierie',
  'etiske',
  'åeruve',
  'magije',
  'sarhka',
  'roeste',
  'aapije',
  'låssas',
  'naljah',
  'daakte',
  'bealla',
  'altese',
  'ulledh',
  'lïevre',
  'aktegh',
  'soekse',
  'fjovle',
  'hutnje',
  'nyanse',
  'chilen',
  'svæjra',
  'jissie',
  'meadan',
  'urtedh',
  'laajra',
  'asvedh',
  'goerke',
  'ipmies',
  'kråane',
  'armodh',
  'gyvjeh',
  'byösse',
  'gogkoe',
  'ummese',
  'vistie',
  'garhke',
  'pååssa',
  'dahkoe',
  'sjïeke',
  'voemse',
  'laadth',
  'tæjhka',
  'daekie',
  'vijpie',
  'sïelke',
  'bårran',
  'bomhpe',
  'jåarta',
  'bietie',
  'krinke',
  'hamhka',
  'etaate',
  'plïere',
  'luvsie',
  'ålkode',
  'neavra',
  'ærmodh',
  'selkie',
  'hïejme',
  'råavka',
  'deejje',
  'låhkoe',
  'låadte',
  'seahka',
  'maskas',
  'faasta',
  'mænnja',
  'goerpe',
  'aereds',
  'resnie',
  'plasse',
  'gåptoe',
  'låtjka',
  'gåjhka',
  'gaagne',
  'badtja',
  'leahta',
  'collae',
  'alkene',
  'skorke',
  'geeles',
  'sijjie',
  'dogkoe',
  'ålmodh',
  'dåajva',
  'sjarka',
  'gåemie',
  'dealoe',
  'havjan',
  'ligkie',
  'vïerpe',
  'lejpie',
  'gïerts',
  'sïjhke',
  'daavla',
  'dansoe',
  'vööhke',
  'gïerme',
  'frodke',
  'haarja',
  'seekes',
  'logove',
  'nåhtoe',
  'gånnga',
  'sïbjeh',
  'skååke',
  'voevte',
  'væhtna',
  'lïdtje',
  'buglie',
  'aktegs',
  'aarije',
  'aegnie',
  'sirrie',
  'såanga',
  'saknoe',
  'daajka',
  'biesie',
  'slipse',
  'bankas',
  'ghanan',
  'aatedh',
  'laskes',
  'gujhth',
  'laable',
  'guvmie',
  'saalve',
  'raabna',
  'leahka',
  'frorke',
  'sfæære',
  'searka',
  'speale',
  'muadta',
  'keeffe',
  'staake',
  'jassoe',
  'trahpa',
  'falhke',
  'stijve',
  'gaajra',
  'damhpa',
  'våågne',
  'snovre',
  'druvve',
  'måvhka',
  'leahpa',
  'raapma',
  'alvoes',
  'veasoe',
  'mæjkes',
  'lïtnje',
  'båavja',
  'reglie',
  'kruana',
  'biedie',
  'ålkede',
  'maadth',
  'hedtie',
  'åvteld',
  'våaloe',
  'löövje',
  'pænsta',
  'idylle',
  'lijvie',
  'sådtoe',
  'håagke',
  'baetie',
  'fïerje',
  'aarmoe',
  'bigkie',
  'kåahpe',
  'naepie',
  'möbele',
  'jabjan',
  'hearva',
  'såakne',
  'barran',
  'gåatan',
  'snarka',
  'ovmese',
  'utnije',
  'njappa',
  'hæmmoe',
  'pårjan',
  'bårras',
  'deampa',
  'våånte',
  'judove',
  'goeble',
  'gæjmoe',
  'elmies',
  'låetie',
  'slajve',
  'aelmie',
  'ajmodh',
  'gabtoe',
  'kååbpe',
  'fïerve',
  'sporte',
  'eskies',
  'dellie',
  'njoele',
  'loevre',
  'bågkan',
  'saksen',
  'meskie',
  'juktie',
  'gåajah',
  'åelkie',
  'nulsje',
  'ovaale',
  'fåanoe',
  'neakoe',
  'feaske',
  'loedte',
  'sïelte',
  'daerps',
  'sluvke',
  'sïrhke',
  'bovtse',
  'rïssje',
  'girtie',
  'krijke',
  'geahpa',
  'jaaske',
  'kraase',
  'hahkoe',
  'åedijh',
  'såerie',
  'aarhka',
  'nuvtie',
  'skalta',
  'dæjsta',
  'slædda',
  'sjædta',
  'aejmie',
  'kontoe',
  'jabjah',
  'ravtje',
  'tjijne',
  'jitnie',
  'såetie',
  'soedte',
  'majkes',
  'plovje',
  'lïedte',
  'lyöpse',
  'hïelje',
  'anaale',
  'sarhva',
  'dööhle',
  'burrie',
  'paanne',
  'aajlah',
  'sïevre',
  'bååtje',
  'tsööre',
  'maajje',
  'vaahra',
  'tjamme',
  'sïemen',
  'styjje',
  'dulmie',
  'svijle',
  'kaanne',
  'opmeds',
  'njuana',
  'bovtje',
  'jïrhpe',
  'tjæjla',
  'skampa',
  'åvtege',
  'fuerie',
  'raakte',
  'kopije',
  'haemie',
  'ledtie',
  'librie',
  'baahke',
  'gaampe',
  'gåålme',
  'gæbjan',
  'soebke',
  'kåånte',
  'snorpe',
  'åakere',
  'mööreh',
  'tjæhta',
  'myovse',
  'hujnie',
  'krodth',
  'alkeli',
  'tjåmpe',
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
