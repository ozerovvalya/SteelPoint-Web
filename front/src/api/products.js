import axios from '@/axios.js'

// export async function fetchAllProducts() {
//   const response = await fetch('https://your-api.com/products')
//   if (!response.ok) {
//     throw new Error('Network response was not ok')
//   }
//   return await response.json()
// }


export async function fetchAllProducts() {
  const response = await axios.get('/products')
  return response.data
}

// export async function fetchAllProducts() {
//   // имитация задержки и возвращение списка товаров
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([
//           {
//             "id": 1,
//             "name": "Spyderco Endura 4",
//             "price": 120,
//             "image": "/images/endura4.jpg",
//             "description": "Легендарный складной нож с клинком из стали VG-10 и рукоятью из FRN.",
//             "characteristics": {
//               "overall_length": "22.2 см",
//               "blade_length": "9.6 см",
//               "blade_material": "VG-10",
//               "handle_material": "FRN",
//               "weight": "96 г",
//               "lock_type": "Back Lock",
//               "country_of_origin": "Япония"
//             }
//           },
//           {
//             "id": 2,
//             "name": "Spyderco Delica 4",
//             "price": 100,
//             "image": "/images/delica4.jpg",
//             "description": "Компактный складной нож с клинком VG-10 и легкой рукоятью FRN.",
//             "characteristics": {
//               "overall_length": "18.0 см",
//               "blade_length": "7.3 см",
//               "blade_material": "VG-10",
//               "handle_material": "FRN",
//               "weight": "68 г",
//               "lock_type": "Back Lock",
//               "country_of_origin": "Япония"
//             }
//           },
//           {
//             "id": 3,
//             "name": "Benchmade Bugout 535",
//             "price": 150,
//             "image": "/images/bugout535.jpg",
//             "description": "Легкий EDC-нож с клинком из стали S30V и замком AXIS lock.",
//             "characteristics": {
//               "overall_length": "19.4 см",
//               "blade_length": "8.2 см",
//               "blade_material": "CPM-S30V",
//               "handle_material": "Grivory",
//               "weight": "55 г",
//               "lock_type": "AXIS Lock",
//               "country_of_origin": "США"
//             }
//           },
//           {
//             "id": 4,
//             "name": "Benchmade Griptilian 551",
//             "price": 170,
//             "image": "/images/griptilian551.jpg",
//             "description": "Надежный рабочий нож с отличной механикой AXIS lock.",
//             "characteristics": {
//               "overall_length": "20.7 см",
//               "blade_length": "8.7 см",
//               "blade_material": "154CM",
//               "handle_material": "Noryl GTX",
//               "weight": "107 г",
//               "lock_type": "AXIS Lock",
//               "country_of_origin": "США"
//             }
//           },
//           {
//             "id": 5,
//             "name": "Cold Steel Recon 1",
//             "price": 130,
//             "image": "/images/recon1.jpg",
//             "description": "Тактический нож с замком Tri-Ad lock и клинком из стали S35VN.",
//             "characteristics": {
//               "overall_length": "23.5 см",
//               "blade_length": "10.2 см",
//               "blade_material": "CPM-S35VN",
//               "handle_material": "G-10",
//               "weight": "155 г",
//               "lock_type": "Tri-Ad Lock",
//               "country_of_origin": "Тайвань"
//             }
//           },
//           {
//             "id": 6,
//             "name": "Ontario RAT-1",
//             "price": 50,
//             "image": "/images/rat1.jpg",
//             "description": "Рабочий складной нож с AUS-8 сталью и рукоятью из нейлона.",
//             "characteristics": {
//               "overall_length": "21.0 см",
//               "blade_length": "9.3 см",
//               "blade_material": "AUS-8",
//               "handle_material": "Нейлон",
//               "weight": "142 г",
//               "lock_type": "Liner Lock",
//               "country_of_origin": "Тайвань"
//             }
//           },
//           {
//             "id": 7,
//             "name": "Leatherman Wave+",
//             "price": 120,
//             "image": "/images/waveplus.jpg",
//             "description": "Популярный мультитул с 18 инструментами и сменными кусачками.",
//             "characteristics": {
//               "tools": 18,
//               "blade_material": "420HC",
//               "weight": "241 г",
//               "country_of_origin": "США"
//             }
//           },
//           {
//             "id": 8,
//             "name": "Leatherman Charge TTi",
//             "price": 180,
//             "image": "/images/chargetti.jpg",
//             "description": "Премиальный мультитул с титановыми накладками и сталью S30V.",
//             "characteristics": {
//               "tools": 19,
//               "blade_material": "CPM-S30V",
//               "weight": "252 г",
//               "country_of_origin": "США"
//             }
//           },
//           {
//             "id": 9,
//             "name": "Victorinox SwissTool Spirit X",
//             "price": 150,
//             "image": "/images/spiritx.jpg",
//             "description": "Универсальный мультитул от Victorinox с 24 функциями.",
//             "characteristics": {
//               "tools": 24,
//               "blade_material": "Нержавеющая сталь",
//               "weight": "210 г",
//               "country_of_origin": "Швейцария"
//             }
//           },
//           {
//             "id": 10,
//             "name": "Victorinox Huntsman",
//             "price": 50,
//             "image": "/images/huntsman.jpg",
//             "description": "Компактный швейцарский нож для туризма с 15 функциями.",
//             "characteristics": {
//               "tools": 15,
//               "blade_material": "Нержавеющая сталь",
//               "weight": "97 г",
//               "country_of_origin": "Швейцария"
//             }
//           },
//           {
//             "id": 11,
//             "name": "Cold Steel SRK",
//             "price": 90,
//             "image": "/images/srk.jpg",
//             "description": "Выносливый фиксированный нож для суровых условий.",
//             "characteristics": {
//               "overall_length": "27.3 см",
//               "blade_length": "15.2 см",
//               "blade_material": "SK-5",
//               "handle_material": "Kray-Ex",
//               "weight": "232 г",
//               "lock_type": "Фиксированный",
//               "country_of_origin": "Тайвань"
//             }
//           },
//           {
//             "id": 12,
//             "name": "Morakniv Companion",
//             "price": 20,
//             "image": "/images/companion.jpg",
//             "description": "Лёгкий нож для бушкрафта с резиновым хватом.",
//             "characteristics": {
//               "overall_length": "21.9 см",
//               "blade_length": "10.4 см",
//               "blade_material": "Sandvik 12C27",
//               "handle_material": "Резина",
//               "weight": "84 г",
//               "lock_type": "Фиксированный",
//               "country_of_origin": "Швеция"
//             }
//           },
//           {
//             "id": 13,
//             "name": "Gerber StrongArm",
//             "price": 90,
//             "image": "/images/strongarm.jpg",
//             "description": "Фиксированный тактический нож с клинком из стали 420HC.",
//             "characteristics": {
//               "overall_length": "24.8 см",
//               "blade_length": "12.2 см",
//               "blade_material": "420HC",
//               "handle_material": "Резина",
//               "weight": "204 г",
//               "lock_type": "Фиксированный",
//               "country_of_origin": "США"
//             }
//           },
//           {
//             "id": 14,
//             "name": "Spyderco Paramilitary 2",
//             "price": 170,
//             "image": "/images/paramilitary2.jpg",
//             "description": "Легендарный нож с замком Compression Lock и сталью S30V.",
//             "characteristics": {
//               "overall_length": "21.0 см",
//               "blade_length": "8.7 см",
//               "blade_material": "CPM-S30V",
//               "handle_material": "G-10",
//               "weight": "111 г",
//               "lock_type": "Compression Lock",
//               "country_of_origin": "США"
//             }
//           },
//           {
//             "id": 15,
//             "name": "Opinel No.8 Carbon",
//             "price": 20,
//             "image": "/images/opinel8.jpg",
//             "description": "Классический французский складной нож с углеродистой сталью.",
//             "characteristics": {
//               "overall_length": "19.5 см",
//               "blade_length": "8.5 см",
//               "blade_material": "Углеродистая сталь",
//               "handle_material": "Бук",
//               "weight": "45 г",
//               "lock_type": "Virobloc",
//               "country_of_origin": "Франция"
//             }
//           },
//           {
//             "id": 16,
//             "name": "Victorinox Classic SD",
//             "price": 25,
//             "image": "/images/classic_sd.jpg",
//             "description": "Миниатюрный швейцарский нож для ключей с 7 функциями.",
//             "characteristics": {
//               "tools": 7,
//               "blade_material": "Нержавеющая сталь",
//               "weight": "21 г",
//               "country_of_origin": "Швейцария"
//             }
//           },
//           {
//             "id": 17,
//             "name": "Leatherman Skeletool",
//             "price": 90,
//             "image": "/images/skeletool.jpg",
//             "description": "Легкий мультитул с минимальным набором инструментов.",
//             "characteristics": {
//               "tools": 7,
//               "blade_material": "420HC",
//               "weight": "142 г",
//               "country_of_origin": "США"
//             }
//           }
//         ]

//       )
//     }, 500)
//   })
// }