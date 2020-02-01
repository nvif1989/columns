var CORPUS = new Map([
  ["code", {code:"code",name:"Food Code",tags:"id tag legend"}],
  ["name", {code:"name",name:"Food Name",tags:"title label"}],
  ["scie", {code:"scie",name:"Scientific Name",tags:"binomial genus botanical"}],
  ["lang", {code:"lang",name:"Local Name",tags:"colloquial trivial country farmer popular"}],
  ["grup", {code:"grup",name:"Food Group",tags:"category class classification grouping type sort kind"}],
  ["tags", {code:"tags",name:"Tags",tags:""}],
  ["enerc", {code:"enerc",name:"Energy",tags:"total atp calorie metabolism essential proximate kj kilojoule kilo joule"}],
  ["water", {code:"water",name:"Moisture",tags:"total liquid steam vapour proximate"}],
  ["ash", {code:"ash",name:"Minerals",tags:"total metal oxide mineral inorganic element residue proximate"}],
  ["vit", {code:"vit",name:"Vitamins",tags:"total vitamin vitamin vitamin"}],
  ["fatce", {code:"fatce",name:"Fat",tags:"total triglyceride lipid blubber essential macronutrient"}],
  ["fibtg", {code:"fibtg",name:"Crude Fiber",tags:"dietary fibre roughage bulk indigestible"}],
  ["choavldf", {code:"choavldf",name:"Carbohydrates",tags:"total cho saccharide ose glucide hydrate carbon macronutrient proximate"}],
  ["protcnt", {code:"protcnt",name:"Protein",tags:"total essential macronutrient proximate"}],
  ["amiac", {code:"amiac",name:"Amino acids",tags:"total amino acid"}],
  ["cartoid", {code:"cartoid",name:"Carotene",tags:"total carotene xanthophyll carotenoid tetraterpenoid terpenoid isoprenoid phytochemical orange yellow pigment"}],
  ["orgac", {code:"orgac",name:"Organic acids",tags:"total organic acid"}],
  ["phytac", {code:"phytac",name:"Phytate",tags:"phytate phytic acidip6 ip 6 phytic inositol hexakisphosphate polyphosphate cyclohexane hexayl hexakis dihydrogen phosphate salt saturated cyclic acid"}],
  ["mnrleq", {code:"mnrleq",name:"Essential Quantity Minerals",tags:"total chemical element"}],
  ["mnrlet", {code:"mnrlet",name:"Essential Trace Minerals",tags:"total essential chemical element"}],
  ["vitb", {code:"vitb",name:"Vitamin B",tags:"total vitamin b"}],
  ["vitc", {code:"vitc",name:"Vitamin C",tags:"ascorbic acid total ascorbate water soluble essential"}],
  ["fasat", {code:"fasat",name:"Saturated Fatty acids",tags:"tsfa sfa total fat triglyceride lipid"}],
  ["fauns", {code:"fauns",name:"Unsaturated Fatty acids",tags:"tufa ufa good healthy fat lipid"}],
  ["faess", {code:"faess",name:"Essential Fatty acids",tags:"tefa efa total good healthy fat lipid"}],
  ["facis", {code:"facis",name:"Cis Fatty acids",tags:"tcfa cfa total good healthy fat lipid"}],
  ["fams", {code:"fams",name:"Monounsaturated Fatty acids",tags:"tmufa mufa total mono unsaturated fat triglyceride lipid"}],
  ["fapu", {code:"fapu",name:"Polyunsaturated Fatty acids",tags:"tpufa pufa total poly unsaturated fat triglyceride lipid"}],
  ["facn3", {code:"facn3",name:"Cis ω-3 Fatty acids",tags:"total ω3 w3 w 3 omega good healthy fat lipid"}],
  ["facn6", {code:"facn6",name:"Cis ω-6 Fatty acids",tags:"total ω6 w6 w 6 omega good healthy fat lipid"}],
  ["facn9", {code:"facn9",name:"Cis ω-9 Fatty acids",tags:"total ω9 w9 w 9 omega good healthy fat lipid"}],
  ["facn7", {code:"facn7",name:"Cis ω-7 Fatty acids",tags:"total ω7 w7 w 7 omega good healthy fat lipid"}],
  ["fibins", {code:"fibins",name:"Insoluble Dietary Fiber",tags:"total fibre roughage bulk indigestible"}],
  ["fibsol", {code:"fibsol",name:"Soluble Dietary Fiber",tags:"total fibre roughage bulk indigestible"}],
  ["amiace", {code:"amiace",name:"Essential Amino acids",tags:"total essential"}],
  ["amiacce", {code:"amiacce",name:"Conditionally essential Amino acids",tags:"total"}],
  ["ca", {code:"ca",name:"Calcium (Ca)",tags:"quantity alkaline earth metal mineral chemical element"}],
  ["p", {code:"p",name:"Phophorus (P)",tags:"quantity nonmetal mineral chemical element"}],
  ["fe", {code:"fe",name:"Iron (Fe)",tags:"trace transition metal mineral chemical element"}],
  ["mg", {code:"mg",name:"Magnesium (Mg)",tags:"quantity alkaline earth metal mineral chemical element"}],
  ["na", {code:"na",name:"Sodium (Na)",tags:"quantity alkali metal mineral chemical element"}],
  ["k", {code:"k",name:"Potassium (K)",tags:"quantity alkali metal mineral chemical element"}],
  ["cu", {code:"cu",name:"Copper (Cu)",tags:"trace transition metal mineral chemical element"}],
  ["mn", {code:"mn",name:"Manganese (Mn)",tags:"trace transition metal ineral chemical element"}],
  ["mo", {code:"mo",name:"Molybdenum (Mo)",tags:"trace transition metal mineral chemical element"}],
  ["zn", {code:"zn",name:"Zinc (Zn)",tags:"trace post transition mineral chemical element"}],
  ["cr", {code:"cr",name:"Chromium (Cr)",tags:"trace transition metal mineral chemical element"}],
  ["s", {code:"s",name:"Sulphur (S)",tags:"trace nonmetal mineral chemical element"}],
  ["cl", {code:"cl",name:"Chlorine (Cr)",tags:"quantity nonmetal mineral chemical element"}],
  ["nt", {code:"nt",name:"Nitrogen (N)",tags:"quantity nonmetal mineral chemical element"}],
  ["carot", {code:"carot",name:"Carotenes",tags:"total carotene xanthophyll carotenoid tetraterpenoid terpenoid isoprenoid phytochemical orange yellow pigment"}],
  ["cartbeq", {code:"cartbeq",name:"β-Carotene equivalents",tags:"total beta b carotene carotenoid provitamin previtamin a"}],
  ["cartb", {code:"cartb",name:"β-Carotene",tags:"b beta carotene carotenoid tetraterpenoid terpenoid isoprenoid phytochemical dark red orange pigment crystalline crystal vitamer provitamin vitamin vitamin-a"}],
  ["thia", {code:"thia",name:"Thiamine (B1)",tags:"thiamin aneurine vitamin b1 b 1 water soluble essential"}],
  ["ribf", {code:"ribf",name:"Riboflavin (B2)",tags:"vactochrome lactoflavin vitamin b2 b 2 water soluble g essential"}],
  ["nia", {code:"nia",name:"Niacin (B3)",tags:"nicotinic acid nicotinamide bionic vitamin b3 b 3 pp water soluble essential white translucent crystalline crystal"}],
  ["vitb6c", {code:"vitb6c",name:"Total B6",tags:"pn p5p pl plp pm pmp pa pyridoxine pyridoxal pyridoxamine pyridoxic acid pyritinol vitamer vitamin b6 b 6 water soluble essential"}],
  ["folsum", {code:"folsum",name:"Folic Acid (B9) (total)",tags:"total folic folate pteroyl glutamic acid glutamate folic folacin vitamin b9 b 9 bc m water soluble essential folate pteroyl glutamic acid glutamate folic folacin vitamin b9 b 9 bc m water soluble essential"}],
  ["folac", {code:"folac",name:"Folic Acid (B9) (free)",tags:"synthetic folate pteroyl glutamic acid glutamate folic folacin vitamin b9 b 9 bc m water soluble essential"}],
  ["choln", {code:"choln",name:"Choline (total)",tags:"essential nutrient hydroxy trimethylethan aminium viscous deliquescent liquid very soluble"}],
  ["arg", {code:"arg",name:"Arginine",tags:"r amino acid"}],
  ["his", {code:"his",name:"Histidine",tags:"h amino acid"}],
  ["lys", {code:"lys",name:"Lysine",tags:"k amino acid"}],
  ["trp", {code:"trp",name:"Tryptophan",tags:"w amino acid"}],
  ["phe", {code:"phe",name:"Phenylalanine",tags:"f amino acid"}],
  ["tyr", {code:"tyr",name:"Tyrosine",tags:"y amino acid"}],
  ["met", {code:"met",name:"Methionine",tags:"m amino acid"}],
  ["cys", {code:"cys",name:"Cysteine",tags:"c amino acid"}],
  ["thr", {code:"thr",name:"Threonine",tags:"t amino acid"}],
  ["leu", {code:"leu",name:"Leucine",tags:"l amino acid"}],
  ["ile", {code:"ile",name:"Isoleucine",tags:"i amino acid"}],
  ["val", {code:"val",name:"Valine",tags:"v amino acid"}],
  ["f16d0", {code:"f16d0",name:"Palmitic acid (C16:0)",tags:"c160 c 160 16 0 hexadecanoic carboxylic saturated fatty fat triglyceride lipid white crystals"}],
  ["f18d0", {code:"f18d0",name:"Stearic acid (C18:0)",tags:"c180 c 180 18 0 octadecanoic carboxylic saturated fatty fat triglyceride lipid white solid pungent oily"}],
  ["f20d0", {code:"f20d0",name:"Arachidic acid (C20:0)",tags:"c200 c 200 20 0 eicosanoic icosanoic arachic carboxylic saturated fatty fat triglyceride lipid white crystalline crystal solid"}],
  ["f22d0", {code:"f22d0",name:"Behenic acid (C22:0)",tags:"c220 c 220 22 0 docosanoic docosanoate hydrofol carboxylic saturated fatty fat triglyceride lipid white yellow crystalline crystal powder"}],
  ["f24d0", {code:"f24d0",name:"Lignoceric acid (C24:0)",tags:"c240 c 240 24 0 tetracosanoic carboxylic saturated fatty fat triglyceride lipid"}],
  ["f16d1cn7", {code:"f16d1cn7",name:"Palmitoleic acid (C16:1)",tags:"c161 c 161 16 1 hexadec enoic palmitoleic hexadecenoic omega 7 monounsaturated mono unsaturated fatty fat triglyceride lipid"}],
  ["f18d1cn9", {code:"f18d1cn9",name:"Oleic acid (C18:1n9)",tags:"c181n9 c181 c 181 18 1n9 1 n9 n 9 octadec enoic octadecenoic omega 9 monounsaturated mono unsaturated fatty fat triglyceride lipid"}],
  ["f18d2cn6", {code:"f18d2cn6",name:"Linoleic acid (C18:2n6)",tags:"c182n6 c182 c 182 18 2 n6 n 6 octadeca dienoic octadecadienoic omega 6 polyunsaturated poly unsaturated fatty fat triglyceride lipid colorless oil"}],
  ["f18d3n3", {code:"f18d3n3",name:"α-Linolenic acid (C18:3n3)",tags:"c183n3 c183 c 183 18 3 n3 n 3 ala lna a alpha octadecatrienoic octadeca trienoic omega 3 polyunsaturated poly unsaturated fatty fat triglyceride lipid"}],
  ["vitb12", {code:"vitb12",name:"Vitamin B12",tags:"cobalamin water soluble cobalt"}],
  ["oxalt", {code:"oxalt",name:"Oxalates",tags:"total ox ethanedioate oxalic organic acid"}],
  ["phytacp", {code:"phytacp",name:"Phytate % of P",tags:"ip6 ip 6 phytic inositol hexakisphosphate polyphosphate cyclohexane hexayl hexakis dihydrogen phosphate salt saturated cyclic acid"}],
]);
module.exports = CORPUS;
