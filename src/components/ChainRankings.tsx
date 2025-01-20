"use client"
import { useState} from 'react';

interface Chain {
  id: string;
  name: string;
  total_value_locked: number;
  volume_24h: number;
  transactions_24h: number;
  total_dexes: number;
  total_pools: number;
  total_tokens: number;
}

export default function ChainRankings() {
  const chains: Chain[] = [
      {
        id: "1",
        name: "Solana",
        total_value_locked: 45677252012.59,
        volume_24h: 4919891050.64,
        transactions_24h: 21778765,
        total_dexes: 69,
        total_pools: 923740,
        total_tokens: 821797
      },
      {
        id: "2",
        name: "Ethereum",
        total_value_locked: 6865755161.52,
        volume_24h: 1472550233.97,
        transactions_24h: 243428,
        total_dexes: 55,
        total_pools: 394556,
        total_tokens: 369350
      },
      {
        id: "3",
        name: "BNB Chain",
        total_value_locked: 2015654246.51,
        volume_24h: 716458343.96,
        transactions_24h: 1028264,
        total_dexes: 116,
        total_pools: 1662946,
        total_tokens: 1515358
      },
      {
        id: "4", 
        name: "Base",
        total_value_locked: 1977093864.56,
        volume_24h: 1376675538.22,
        transactions_24h: 2121858,
        total_dexes: 72,
        total_pools: 1195000,
        total_tokens: 1164730
      },
      {
        id: "5",
        name: "Arbitrum",
        total_value_locked: 536025274.26,
        volume_24h: 366773773.99,
        transactions_24h: 408674,
        total_dexes: 72,
        total_pools: 66595,
        total_tokens: 51060
      },
      {
        id: "6",
        name: "Polygon POS",
        total_value_locked: 518267064.03,
        volume_24h: 60744527.56,
        transactions_24h: 324545,
        total_dexes: 54,
        total_pools: 105075,
        total_tokens: 58266
      },
      {
        id: "7",
        name: "Pulsechain",
        total_value_locked: 508342237.93,
        volume_24h: 15553034.32,
        transactions_24h: 224481,
        total_dexes: 14,
        total_pools: 212035,
        total_tokens: 109914
      },
      {
        id: "8",
        name: "Blast",
        total_value_locked: 488749375.10,
        volume_24h: 6929227.59,
        transactions_24h: 12844,
        total_dexes: 37,
        total_pools: 10363,
        total_tokens: 8720
      },
      {
        id: "9",
        name: "Tron",
        total_value_locked: 406839699.80,
        volume_24h: 40981883.91,
        transactions_24h: 10399,
        total_dexes: 4,
        total_pools: 2927,
        total_tokens: 2570
      },
      {
        id: "10",
        name: "Cronos zkEVM",
        total_value_locked: 321858199.28,
        volume_24h: 181094.81,
        transactions_24h: 2113,
        total_dexes: 3,
        total_pools: 299,
        total_tokens: 164
      },
      {
        id: "11",
        name: "Sui Network",
        total_value_locked: 312080213.01,
        volume_24h: 63265751.48,
        transactions_24h: 449585,
        total_dexes: 6,
        total_pools: 30863,
        total_tokens: 25993
      },
      {
        id: "12",
        name: "Cronos",
        total_value_locked: 249771323.76,
        volume_24h: 3662992.31,
        transactions_24h: 16413,
        total_dexes: 24,
        total_pools: 28843,
        total_tokens: 21061
      },
      {
        id: "13",
        name: "Sepolia Testnet",
        total_value_locked: 249154776.49,
        volume_24h: 39350722.61,
        transactions_24h: 2893,
        total_dexes: 21,
        total_pools: 8162,
        total_tokens: 17750
      },
      {
        id: "14",
        name: "Mantle",
        total_value_locked: 217970258.08,
        volume_24h: 30373842.92,
        transactions_24h: 177743,
        total_dexes: 16,
        total_pools: 1900,
        total_tokens: 848
      },
      {
        id: "15",
        name: "Avalanche",
        total_value_locked: 186879148.73,
        volume_24h: 83968311.82,
        transactions_24h: 99014,
        total_dexes: 42,
        total_pools: 47287,
        total_tokens: 39170
      },
      {
        id: "16",
        name: "Optimism",
        total_value_locked: 177965563.71,
        volume_24h: 65734756.69,
        transactions_24h: 201662,
        total_dexes: 24,
        total_pools: 20309,
        total_tokens: 15979
      },
      {
        id: "17",
        name: "TON",
        total_value_locked: 172248856.62,
        volume_24h: 22313562.89,
        transactions_24h: 80754,
        total_dexes: 35,
        total_pools: 9552,
        total_tokens: 51117
      },
      {
        id: "18",
        name: "Ronin",
        total_value_locked: 137737975.58,
        volume_24h: 4218378.44,
        transactions_24h: 34744,
        total_dexes: 2,
        total_pools: 159,
        total_tokens: 23
      },
      {
        id: "19",
        name: "Taiko",
        total_value_locked: 108928306.72,
        volume_24h: 272775.22,
        transactions_24h: 6214,
        total_dexes: 13,
        total_pools: 344,
        total_tokens: 181
      },
      {
        id: "20",
        name: "Metis",
        total_value_locked: 96618473.09,
        volume_24h: 2236376.95,
        transactions_24h: 4586,
        total_dexes: 12,
        total_pools: 3499,
        total_tokens: 2909
      },
      {
        id: "21",
        name: "Cardano",
        total_value_locked: 89262804.70,
        volume_24h: 3413091.04,
        transactions_24h: 3189,
        total_dexes: 2,
        total_pools: 1387,
        total_tokens: 888
      },
      {
        id: "22",
        name: "Hedera Hashgraph",
        total_value_locked: 89108886.59,
        volume_24h: 7928930.12,
        transactions_24h: 18631,
        total_dexes: 3,
        total_pools: 1901,
        total_tokens: 1134
      },
      {
        id: "23",
        name: "Gnosis XDAI",
        total_value_locked: 80666257.25,
        volume_24h: 1152451.82,
        transactions_24h: 52870,
        total_dexes: 8,
        total_pools: 5387,
        total_tokens: 2161
      },
      {
        id: "24",
        name: "Aptos",
        total_value_locked: 79212969.11,
        volume_24h: 4957379.20,
        transactions_24h: 61506,
        total_dexes: 8,
        total_pools: 3721,
        total_tokens: 1251
      },
      {
        id: "25",
        name: "ZkSync",
        total_value_locked: 74519237.33,
        volume_24h: 12192884.33,
        transactions_24h: 46951,
        total_dexes: 29,
        total_pools: 9370,
        total_tokens: 5157
      },
      {
        id: "26",
        name: "Starknet",
        total_value_locked: 68800360.20,
        volume_24h: 5877586.75,
        transactions_24h: 19860,
        total_dexes: 5,
        total_pools: 3375,
        total_tokens: 1993
      },
      {
        id: "27",
        name: "Sonic",
        total_value_locked: 53511191.88,
        volume_24h: 36946471.67,
        transactions_24h: 124045,
        total_dexes: 17,
        total_pools: 2523,
        total_tokens: 1933
      },
      {
        id: "28",
        name: "Sei V2",
        total_value_locked: 51574036.00,
        volume_24h: 8749561.04,
        transactions_24h: 35039,
        total_dexes: 7,
        total_pools: 2690,
        total_tokens: 2453
      },
      {
        id: "29",
        name: "Fraxtal",
        total_value_locked: 49539478.70,
        volume_24h: 1769035.15,
        transactions_24h: 4686,
        total_dexes: 8,
        total_pools: 283,
        total_tokens: 150
      },
      {
        id: "30",
        name: "Linea",
        total_value_locked: 47040291.46,
        volume_24h: 13447613.64,
        transactions_24h: 34093,
        total_dexes: 29,
        total_pools: 1968,
        total_tokens: 663
      },
      {
        id: "31",
        name: "BOB Network",
        total_value_locked: 41686700.32,
        volume_24h: 33595337.75,
        transactions_24h: 22764,
        total_dexes: 6,
        total_pools: 242,
        total_tokens: 51
      },
      {
        id: "32",
        name: "Merlin Chain",
        total_value_locked: 37379267.44,
        volume_24h: 1727808.63,
        transactions_24h: 8801,
        total_dexes: 3,
        total_pools: 785,
        total_tokens: 664
      },
      {
        id: "33",
        name: "opBNB",
        total_value_locked: 36283952.24,
        volume_24h: 748809.00,
        transactions_24h: 21772,
        total_dexes: 16,
        total_pools: 14873,
        total_tokens: 8323
      },
      {
        id: "34",
        name: "CELO",
        total_value_locked: 25621984.09,
        volume_24h: 24943032.86,
        transactions_24h: 83649,
        total_dexes: 6,
        total_pools: 1396,
        total_tokens: 491
      },
      {
        id: "35",
        name: "Bitkub Chain",
        total_value_locked: 21021333.28,
        volume_24h: 20417.39,
        transactions_24h: 10343,
        total_dexes: 2,
        total_pools: 811,
        total_tokens: 732
      },
      {
        id: "36",
        name: "IOTA EVM",
        total_value_locked: 19291199.96,
        volume_24h: 3748773.96,
        transactions_24h: 16465,
        total_dexes: 5,
        total_pools: 301,
        total_tokens: 173
      },
      {
        id: "37",
        name: "Flare",
        total_value_locked: 19202208.86,
        volume_24h: 1104004.48,
        transactions_24h: 9840,
        total_dexes: 8,
        total_pools: 2135,
        total_tokens: 1234
      },
      {
        id: "38",
        name: "Fantom",
        total_value_locked: 16260961.46,
        volume_24h: 1627675.38,
        transactions_24h: 50843,
        total_dexes: 44,
        total_pools: 46279,
        total_tokens: 34068
      },
      {
        id: "39",
        name: "BSquared Network",
        total_value_locked: 15699834.61,
        volume_24h: 17608.16,
        transactions_24h: 133,
        total_dexes: 3,
        total_pools: 54,
        total_tokens: 28
      },
      {
        id: "40",
        name: "Core",
        total_value_locked: 12735330.04,
        volume_24h: 700601.21,
        transactions_24h: 9573,
        total_dexes: 23,
        total_pools: 31028,
        total_tokens: 22345
      },
      {
        id: "41",
        name: "Moonbeam",
        total_value_locked: 12200967.65,
        volume_24h: 741264.71,
        transactions_24h: 1829,
        total_dexes: 13,
        total_pools: 1102,
        total_tokens: 435
      },
      {
        id: "42", 
        name: "Eclipse",
        total_value_locked: 11773148.54,
        volume_24h: 3807424.11,
        transactions_24h: 24708,
        total_dexes: 14,
        total_pools: 33,
        total_tokens: 288
      },
      {
        id: "43",
        name: "Moonriver",
        total_value_locked: 11487969.33,
        volume_24h: 167682.78,
        transactions_24h: 289,
        total_dexes: 10,
        total_pools: 799,
        total_tokens: 389
      },
      {
        id: "44",
        name: "Scroll",
        total_value_locked: 10578180.23,
        volume_24h: 1784384.86,
        transactions_24h: 7944,
        total_dexes: 30,
        total_pools: 2174,
        total_tokens: 1238
      },
      {
        id: "45",
        name: "Manta Pacific",
        total_value_locked: 8649357.45,
        volume_24h: 636574.70,
        transactions_24h: 16596,
        total_dexes: 10,
        total_pools: 955,
        total_tokens: 432
      },
      {
        id: "46",
        name: "Conflux",
        total_value_locked: 8352144.03,
        volume_24h: 133631.45,
        transactions_24h: 1586,
        total_dexes: 17,
        total_pools: 73,
        total_tokens: 615
      },
      {
        id: "47",
        name: "IOTEX",
        total_value_locked: 8031714.78,
        volume_24h: 348988.28,
        transactions_24h: 160227,
        total_dexes: 3,
        total_pools: 620,
        total_tokens: 346
      },
      {
        id: "48",
        name: "Internet Computer",
        total_value_locked: 7881845.06,
        volume_24h: 595958.53,
        transactions_24h: 6898,
        total_dexes: 3,
        total_pools: 898,
        total_tokens: 499
      },
      {
        id: "49",
        name: "Zedxion Smart Chain",
        total_value_locked: 7708003.90,
        volume_24h: 715783.74,
        transactions_24h: 8891,
        total_dexes: 2,
        total_pools: 98,
        total_tokens: 8
      },
      {
        id: "50",
        name: "SmartBCH",
        total_value_locked: 7597196.59,
        volume_24h: 87577.46,
        transactions_24h: 272,
        total_dexes: 8,
        total_pools: 1466,
        total_tokens: 504
      },
/////
      {
        id: "51",
        name: "Internet Computer",
        total_value_locked: 7850808.33,
        volume_24h: 1276975.98,
        transactions_24h: 11280,
        total_dexes: 3,
        total_pools: 899,
        total_tokens: 500
      },
      {
        id: "52",
        name: "IOTEX",
        total_value_locked: 7661367.74,
        volume_24h: 628011.92,
        transactions_24h: 209247,
        total_dexes: 3,
        total_pools: 620,
        total_tokens: 346
      },
      {
        id: "53",
        name: "Zedxion Smart Chain",
        total_value_locked: 7501190.18,
        volume_24h: 2332177.96,
        transactions_24h: 9463,
        total_dexes: 2,
        total_pools: 98,
        total_tokens: 8
      },
      {
        id: "54",
        name: "Harmony",
        total_value_locked: 7070305.44,
        volume_24h: 262961.73,
        transactions_24h: 5018,
        total_dexes: 13,
        total_pools: 6005,
        total_tokens: 3032
      },
      {
        id: "55",
        name: "Mode",
        total_value_locked: 6911576.40,
        volume_24h: 3832094.68,
        transactions_24h: 32335,
        total_dexes: 13,
        total_pools: 844,
        total_tokens: 363
      },
      {
        id: "56",
        name: "Chiliz Chain",
        total_value_locked: 6358162.17,
        volume_24h: 752900.14,
        transactions_24h: 5147,
        total_dexes: 4,
        total_pools: 663,
        total_tokens: 409
      },
      {
        id: "57",
        name: "Flow EVM",
        total_value_locked: 6139428.69,
        volume_24h: 383476.71,
        transactions_24h: 890,
        total_dexes: 2,
        total_pools: 504,
        total_tokens: 1
      },
      {
        id: "58",
        name: "Morph L2",
        total_value_locked: 6060369.50,
        volume_24h: 1458640.66,
        transactions_24h: 19850,
        total_dexes: 6,
        total_pools: 144,
        total_tokens: 48
      },
      {
        id: "59",
        name: "Bitlayer",
        total_value_locked: 5266205.08,
        volume_24h: 183607.00,
        transactions_24h: 274,
        total_dexes: 4,
        total_pools: 634,
        total_tokens: 7
      },
      {
        id: "60",
        name: "XDC",
        total_value_locked: 5014030.44,
        volume_24h: 5189201.99,
        transactions_24h: 32836,
        total_dexes: 6,
        total_pools: 1033,
        total_tokens: 264
      },
      {
        id: "61",
        name: "ZetaChain",
        total_value_locked: 4648539.17,
        volume_24h: 263324.72,
        transactions_24h: 8558,
        total_dexes: 10,
        total_pools: 400,
        total_tokens: 224
      },
      {
        id: "62",
        name: "Filecoin",
        total_value_locked: 4494274.74,
        volume_24h: 475429.57,
        transactions_24h: 1039,
        total_dexes: 6,
        total_pools: 112,
        total_tokens: 86
      },
      {
        id: "63",
        name: "Polygon zkEVM",
        total_value_locked: 3540851.33,
        volume_24h: 1279269.32,
        transactions_24h: 4481,
        total_dexes: 10,
        total_pools: 364,
        total_tokens: 123
      },
      {
        id: "64",
        name: "Gravity",
        total_value_locked: 3490476.60,
        volume_24h: 104843.60,
        transactions_24h: 2828,
        total_dexes: 4,
        total_pools: 201,
        total_tokens: 4
      },
      {
        id: "65",
        name: "Beam",
        total_value_locked: 3214601.48,
        volume_24h: 305202.31,
        transactions_24h: 1221,
        total_dexes: 15,
        total_pools: 39,
        total_tokens: 0
      },
      {
        id: "66",
        name: "DFK Chain",
        total_value_locked: 2794048.89,
        volume_24h: 162998.53,
        transactions_24h: 14184,
        total_dexes: 1,
        total_pools: 507,
        total_tokens: 123
       },
       {
        id: "67",
        name: "BounceBit",
        total_value_locked: 2745303.07,
        volume_24h: 270575.02,
        transactions_24h: 3917,
        total_dexes: 2,
        total_pools: 604,
        total_tokens: 2
       },
       {
        id: "68",
        name: "Wanchain",
        total_value_locked: 2692363.70,
        volume_24h: 105264.91,
        transactions_24h: 3823,
        total_dexes: 2,
        total_pools: 207,
        total_tokens: 74
       },
       {
        id: "69",
        name: "WEMIX",
        total_value_locked: 2625929.39,
        volume_24h: 197236.67,
        transactions_24h: 2061,
        total_dexes: 15,
        total_pools: 142,
        total_tokens: 2
       },
       {
        id: "70",
        name: "Function X",
        total_value_locked: 2562162.96,
        volume_24h: 345352.68,
        transactions_24h: 753,
        total_dexes: 1,
        total_pools: 250,
        total_tokens: 108
       },
       {
        id: "71",
        name: "Vana",
        total_value_locked: 2550466.60,
        volume_24h: 523835.35,
        transactions_24h: 1460,
        total_dexes: 16,
        total_pools: 355,
        total_tokens: 5
       },
       {
        id: "72",
        name: "Aurora",
        total_value_locked: 2499367.37,
        volume_24h: 198485.86,
        transactions_24h: 3845,
        total_dexes: 8,
        total_pools: 1880,
        total_tokens: 1113
       },
       {
        id: "73",
        name: "re.al",
        total_value_locked: 2477046.04,
        volume_24h: 102118.37,
        transactions_24h: 666,
        total_dexes: 1,
        total_pools: 331,
        total_tokens: 5
       },
       {
        id: "74",
        name: "Dogechain",
        total_value_locked: 2392129.58,
        volume_24h: 47154.12,
        transactions_24h: 5881,
        total_dexes: 21,
        total_pools: 9190,
        total_tokens: 15651
       },
       {
        id: "75",
        name: "Unichain Sepolia",
        total_value_locked: 2198779.06,
        volume_24h: 6359037.04,
        transactions_24h: 41028,
        total_dexes: 21,
        total_pools: 18746,
        total_tokens: 114235
       },
      {
        id: "76",
        name: "Unichain Sepolia",
        total_value_locked: 2072334.57,
        volume_24h: 4545208.14,
        transactions_24h: 28769,
        total_dexes: 21,
        total_pools: 2310,
        total_tokens: 97806
       },
       {
        id: "77",
        name: "Shibarium",
        total_value_locked: 2017401.60,
        volume_24h: 23492.05,
        transactions_24h: 6192,
        total_dexes: 14,
        total_pools: 4772,
        total_tokens: 3360
       },
       {
        id: "78",
        name: "BEVM",
        total_value_locked: 1931477.09,
        volume_24h: 4729.85,
        transactions_24h: 214,
        total_dexes: 2,
        total_pools: 62,
        total_tokens: 21
       },
       {
        id: "79",
        name: "EOS EVM",
        total_value_locked: 1686546.38,
        volume_24h: 63855.43,
        transactions_24h: 1864,
        total_dexes: 20,
        total_pools: 113,
        total_tokens: 6
       },
       {
        id: "80",
        name: "ApeChain",
        total_value_locked: 1260338.52,
        volume_24h: 16738.84,
        transactions_24h: 27274,
        total_dexes: 3,
        total_pools: 1407,
        total_tokens: 1374
       },
       {
        id: "81",
        name: "DefiVerse",
        total_value_locked: 1330346.34,
        volume_24h: 5534.12,
        transactions_24h: 439,
        total_dexes: 1,
        total_pools: 88,
        total_tokens: 8
       },
       {
        id: "82",
        name: "x Layer",
        total_value_locked: 1298320.10,
        volume_24h: 43548.07,
        transactions_24h: 882,
        total_dexes: 14,
        total_pools: 586,
        total_tokens: 478
       },
       {
        id: "83",
        name: "Oasis Sapphire",
        total_value_locked: 1253433.07,
        volume_24h: 9145.27,
        transactions_24h: 75,
        total_dexes: 3,
        total_pools: 99,
        total_tokens: 84
       },
       {
        id: "84",
        name: "Telos",
        total_value_locked: 1218427.78,
        volume_24h: 50232.17,
        transactions_24h: 8555,
        total_dexes: 15,
        total_pools: 605,
        total_tokens: 321
       },
       {
        id: "85",
        name: "Canto",
        total_value_locked: 1187038.46,
        volume_24h: 75159.21,
        transactions_24h: 1436,
        total_dexes: 7,
        total_pools: 720,
        total_tokens: 425
       },
       {
        id: "86",
        name: "Zero Network",
        total_value_locked: 1181469.53,
        volume_24h: 241832.53,
        transactions_24h: 1223,
        total_dexes: 2,
        total_pools: 4568,
        total_tokens: 4541
       },
       {
        id: "87",
        name: "QL1",
        total_value_locked: 1351772.36,
        volume_24h: 45048.71,
        transactions_24h: 2806,
        total_dexes: 11,
        total_pools: 88,
        total_tokens: 156
       },
       {
        id: "88",
        name: "AirDAO",
        total_value_locked: 992215.38,
        volume_24h: 9925.38,
        transactions_24h: 680,
        total_dexes: 1,
        total_pools: 241,
        total_tokens: 8
       },
       {
        id: "89",
        name: "Etherlink",
        total_value_locked: 957660.14,
        volume_24h: 123965.42,
        transactions_24h: 707,
        total_dexes: 3,
        total_pools: 574,
        total_tokens: 2
       },
       {
        id: "90",
        name: "Oasys",
        total_value_locked: 918536.39,
        volume_24h: 52234.46,
        transactions_24h: 238,
        total_dexes: 2,
        total_pools: 622,
        total_tokens: 1
       },
       {
        id: "91",
        name: "Humanode",
        total_value_locked: 891187.10,
        volume_24h: 16930.08,
        transactions_24h: 34,
        total_dexes: 1,
        total_pools: 99,
        total_tokens: 9
       },
       {
        id: "92",
        name: "Ink",
        total_value_locked: 882239.10,
        volume_24h: 272332.84,
        transactions_24h: 3257,
        total_dexes: 2,
        total_pools: 130,
        total_tokens: 119
       },
       {
        id: "93",
        name: "Kucoin Community Chain",
        total_value_locked: 796955.08,
        volume_24h: 22727.53,
        transactions_24h: 703,
        total_dexes: 3,
        total_pools: 655,
        total_tokens: 325
       },
       {
        id: "94",
        name: "Zora",
        total_value_locked: 796794.18,
        volume_24h: 30802.74,
        transactions_24h: 2645,
        total_dexes: 35,
        total_pools: 13580,
        total_tokens: 513502
       },
       {
        id: "95",
        name: "Songbird",
        total_value_locked: 778425.04,
        volume_24h: 78903.39,
        transactions_24h: 21732,
        total_dexes: 7,
        total_pools: 1432,
        total_tokens: 262
       },
       {
        id: "96",
        name: "Units Network",
        total_value_locked: 748763.99,
        volume_24h: 21285.48,
        transactions_24h: 272,
        total_dexes: 1,
        total_pools: 292,
        total_tokens: 4
       },
       {
        id: "97",
        name: "Arbitrum Nova",
        total_value_locked: 674681.79,
        volume_24h: 23199.63,
        transactions_24h: 1167,
        total_dexes: 6,
        total_pools: 3200,
        total_tokens: 1843
       },
       {
        id: "98",
        name: "Kaia",
        total_value_locked: 640850.52,
        volume_24h: 41049.48,
        transactions_24h: 3159,
        total_dexes: 5,
        total_pools: 1637,
        total_tokens: 825
       },
       {
        id: "99",
        name: "Swellchain",
        total_value_locked: 595163.34,
        volume_24h: 4492.64,
        transactions_24h: 59,
        total_dexes: 1,
        total_pools: 79,
        total_tokens: 9
       },
       {
        id: "100",
        name: "Elysium",
        total_value_locked: 566684.66,
        volume_24h: 11817.04,
        transactions_24h: 113,
        total_dexes: 13,
        total_pools: 131,
        total_tokens: 31
       }
  ];
  const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 50;
const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentChains = chains.slice(indexOfFirstItem, indexOfLastItem);
const totalPages = Math.ceil(chains.length / itemsPerPage);
 
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
 
  return (
    <div className="bg-[#0d1117] text-white min-h-screen p-4">
      <table className="w-full">
        <thead>
          <tr className="text-gray-400 border-b border-gray-800">
            <th className="text-left p-4">NAME</th>
            <th className="text-right p-4">TOTAL VALUE LOCKED</th>
            <th className="text-right p-4">24H VOLUME</th>
            <th className="text-right p-4">24H TRANSACTIONS</th>
            <th className="text-right p-4">TOTAL DEXES</th>
            <th className="text-right p-4">TOTAL POOLS</th>
            <th className="text-right p-4">TOTAL TOKENS</th>
          </tr>
        </thead>
        <tbody>
          {currentChains.map((chain, index) => (
            <tr 
              key={chain.id} 
              className="border-b border-gray-800 hover:bg-[#1a1f2b] cursor-pointer"
            >
              <td className="p-4 flex items-center gap-3">
                <span className="text-gray-400">{indexOfFirstItem + index + 1}</span>
                <span>{chain.name}</span>
              </td>
              <td className="text-right p-4">${chain.total_value_locked.toLocaleString()}</td>
              <td className="text-right p-4">${chain.volume_24h.toLocaleString()}</td>
              <td className="text-right p-4">{chain.transactions_24h.toLocaleString()}</td>
              <td className="text-right p-4">{chain.total_dexes}</td>
              <td className="text-right p-4">{chain.total_pools.toLocaleString()}</td>
              <td className="text-right p-4">{chain.total_tokens.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
  
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={`px-3 py-1 rounded hover:bg-opacity-80 ${
              currentPage === i + 1 ? 'bg-[#6e3a9d]' : 'bg-[#1a1f2b]'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}