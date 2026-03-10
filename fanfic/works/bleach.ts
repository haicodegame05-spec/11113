
import { FanficWork } from '../types';

export const BLEACH: FanficWork = {
  id: 'bleach',
  title: 'Bleach (Sứ Giả Thần Chết)',
  country: 'Nhật',
  description: 'Câu chuyện về Kurosaki Ichigo, một thiếu niên có khả năng nhìn thấy linh hồn, người đã trở thành một Shinigami (Thần Chết) thay thế.',
  plot: 'Ichigo Kurosaki là một thiếu niên có khả năng nhìn thấy các linh hồn. Cuộc sống của anh thay đổi hoàn toàn khi anh gặp Rukia Kuchiki, một Shinigami đang truy đuổi một Hollow (linh hồn ác quỷ). Trong trận chiến, Rukia bị thương và phải chuyển sức mạnh của mình cho Ichigo để anh có thể bảo vệ gia đình. Từ đó, Ichigo dấn thân vào thế giới của các Shinigami, bảo vệ con người khỏi Hollow và duy trì sự cân bằng giữa thế giới người sống và linh hồn (Thi hồn giới - Soul Society).',
  worldSetting: 'Thế giới trong Bleach được chia thành nhiều cõi: Thế giới con người, Soul Society (nơi linh hồn cư ngụ), Hueco Mundo (nơi ở của Hollow) và Địa ngục. Các Shinigami sử dụng Trảm Hồn Đao (Zanpakuto) với hai cấp độ giải phóng là Shikai và Bankai để chiến đấu.',
  characters: [
    { name: 'Kurosaki Ichigo', role: 'Nhân vật chính', description: 'Một Shinigami thay thế với sức mạnh tiềm ẩn khổng lồ, lai giữa Shinigami, Quincy và Hollow.' },
    { name: 'Kuchiki Rukia', role: 'Đội trưởng Đội 13', description: 'Người đã đưa Ichigo vào con đường Shinigami, em nuôi của Kuchiki Byakuya.' },
    { name: 'Inoue Orihime', role: 'Bạn thân Ichigo', description: 'Sở hữu năng lực Shun Shun Rikka có khả năng từ chối hiện thực và chữa lành vết thương.' },
    { name: 'Ishida Uryu', role: 'Quincy', description: 'Một cung thủ Quincy tài năng, ban đầu là đối thủ nhưng sau trở thành bạn đồng hành của Ichigo.' },
    { name: 'Sado Yasutora (Chad)', role: 'Bạn thân Ichigo', description: 'Một thanh niên có sức mạnh thể chất phi thường và cánh tay biến đổi nhờ sức mạnh Fullbring.' },
    { name: 'Aizen Sosuke', role: 'Phản diện chính', description: 'Cựu Đội trưởng Đội 5, kẻ đã phản bội Soul Society để tìm kiếm sức mạnh tối thượng từ Hogyoku.' },
    { name: 'Yamamoto Genryusai', role: 'Tổng đội trưởng', description: 'Người sáng lập Gotei 13, sở hữu Trảm Hồn Đao hệ lửa mạnh nhất - Ryujin Jakka.' },
    { name: 'Kuchiki Byakuya', role: 'Đội trưởng Đội 6', description: 'Tộc trưởng tộc Kuchiki, một Shinigami lạnh lùng và tuân thủ luật lệ tuyệt đối.' },
    { name: 'Zaraki Kenpachi', role: 'Đội trưởng Đội 11', description: 'Một chiến binh cuồng chiến, luôn tìm kiếm những đối thủ mạnh nhất để đối đầu.' },
    { name: 'Hitsugaya Toshiro', role: 'Đội trưởng Đội 10', description: 'Thiên tài trẻ tuổi nhất đạt cấp độ Đội trưởng, sở hữu Trảm Hồn Đao hệ băng Hyorinmaru.' },
    { name: 'Shihoin Yoruichi', role: 'Cựu Đội trưởng Đội 2', description: 'Được mệnh danh là "Thiểm thân Yoruichi" nhờ tốc độ di chuyển cực nhanh.' },
    { name: 'Urahara Kisuke', role: 'Cựu Đội trưởng Đội 12', description: 'Một nhà phát minh thiên tài, chủ cửa hàng Urahara ở thế giới con người.' },
    { name: 'Kyoraku Shunsui', role: 'Đội trưởng Đội 8 / Tổng đội trưởng đời sau', description: 'Một người yêu thích hòa bình nhưng sở hữu sức mạnh vô cùng đáng sợ.' },
    { name: 'Ukitake Jushiro', role: 'Đội trưởng Đội 13', description: 'Một người nhân hậu, mang trong mình sức mạnh của Mimihagi để duy trì sự sống.' },
    { name: 'Unohana Retsu', role: 'Đội trưởng Đội 4', description: 'Kenpachi đời đầu tiên, chuyên gia trị thương nhưng cũng là một kiếm sĩ tàn bạo.' },
    { name: 'Kurotsuchi Mayuri', role: 'Đội trưởng Đội 12', description: 'Một nhà khoa học điên rồ, luôn coi mọi thứ là vật thí nghiệm.' },
    { name: 'Komamura Sajin', role: 'Đội trưởng Đội 7', description: 'Một Shinigami có hình dáng người sói, luôn trung thành tuyệt đối với Yamamoto.' },
    { name: 'Soi Fon', role: 'Đội trưởng Đội 2', description: 'Chỉ huy lực lượng mật vụ, sở hữu Trảm Hồn Đao Suzumebachi có khả năng "Nhị kích tất sát".' },
    { name: 'Ichimaru Gin', role: 'Cựu Đội trưởng Đội 3', description: 'Kẻ luôn mỉm cười đầy bí ẩn, thực chất là gián điệp bên cạnh Aizen để trả thù.' },
    { name: 'Tosen Kaname', role: 'Cựu Đội trưởng Đội 9', description: 'Một Shinigami mù luôn theo đuổi công lý theo cách riêng của mình.' },
    { name: 'Grimmjow Jaegerjaquez', role: 'Espada số 6', description: 'Một Arrancar kiêu ngạo, coi Ichigo là đối thủ truyền kiếp của mình.' },
    { name: 'Ulquiorra Cifer', role: 'Espada số 4', description: 'Một Arrancar lạnh lùng, đại diện cho sự hư vô, sở hữu hai cấp độ giải phóng Resurreccion.' },
    { name: 'Nelliel Tu Odelschwanck', role: 'Cựu Espada số 3', description: 'Một Arrancar tốt bụng, đã từng giúp đỡ Ichigo trong Hueco Mundo.' },
    { name: 'Tier Harribel', role: 'Espada số 3', description: 'Nữ Espada duy nhất trong top 3, đại diện cho sự hy sinh.' },
    { name: 'Starrk Coyote', role: 'Espada số 1', description: 'Arrancar mạnh nhất, đại diện cho sự cô độc, luôn mong muốn có bạn bè.' },
    { name: 'Barragan Louisenbairn', role: 'Espada số 2', description: 'Cựu vương của Hueco Mundo, đại diện cho sự lão hóa và cái chết.' },
    { name: 'Yhwach', role: 'Vua Quincy', description: 'Tổ tiên của loài Quincy, kẻ có khả năng nhìn thấy và thay đổi tương lai (The Almighty).' },
    { name: 'Jugram Haschwalth', role: 'Cận vệ của Yhwach', description: 'Đại diện cho sự cân bằng, là người thân cận nhất với Yhwach.' },
    { name: 'Askin Nakk Le Vaar', role: 'Sternritter D', description: 'Sở hữu năng lực "The Deathdealing", có khả năng điều chỉnh liều lượng gây chết người của bất kỳ chất nào.' },
    { name: 'Giselle Gewelle', role: 'Sternritter Z', description: 'Sở hữu năng lực "The Zombie", có thể biến bất kỳ ai dính máu của mình thành thây ma.' }
  ]
};
