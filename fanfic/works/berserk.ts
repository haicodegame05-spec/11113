
import { FanficWork } from '../types';

export const BERSERK: FanficWork = {
  id: 'berserk',
  title: 'Berserk (Kiếm Sĩ Đen)',
  country: 'Nhật',
  description: 'Một thiên sử thi đen tối về sự phản bội, số phận và cuộc chiến không hồi kết của Guts chống lại các thế lực siêu nhiên.',
  plot: 'Guts là một kiếm sĩ đánh thuê cô độc, người mang trên mình thanh kiếm khổng lồ Dragon Slayer. Cuộc đời anh thay đổi khi gia nhập Băng Ưng của Griffith, một nhà lãnh đạo tài ba và đầy tham vọng. Sau nhiều năm chiến đấu bên nhau, Griffith đã phản bội tất cả để trở thành một thành viên của God Hand trong sự kiện Nhật Thực kinh hoàng. Guts là người duy nhất sống sót cùng với Casca, nhưng cả hai đều bị nguyền rủa bởi Ấn Ký Hiến Tế. Từ đó, Guts bắt đầu hành trình trả thù đầy máu và nước mắt.',
  worldSetting: 'Thế giới trong Berserk là một thế giới giả tưởng đen tối (Dark Fantasy) lấy cảm hứng từ thời Trung Cổ châu Âu. Sau sự kiện Nhật Thực, ranh giới giữa thế giới thực và thế giới linh hồn dần bị xóa nhòa, khiến các sinh vật quỷ dữ (Apostles) xuất hiện khắp nơi.',
  characters: [
    { name: 'Guts', role: 'Nhân vật chính', description: 'Kiếm sĩ đen mang thanh kiếm Dragon Slayer, sở hữu bộ giáp Berserker và sức mạnh ý chí phi thường.' },
    { name: 'Griffith (Femto)', role: 'Phản diện chính', description: 'Thủ lĩnh Băng Ưng, sau này trở thành thành viên thứ 5 của God Hand để thực hiện ước mơ vương quốc của mình.' },
    { name: 'Casca', role: 'Nữ chính / Chỉ huy Băng Ưng', description: 'Một nữ chiến binh tài năng, người yêu của Guts, sau này bị mất trí nhớ do chấn thương tâm lý từ Nhật Thực.' },
    { name: 'Puck', role: 'Tiên tộc (Elf)', description: 'Một chú tiên nhỏ đi theo Guts, có khả năng chữa lành vết thương và mang lại sự hài hước cho câu chuyện.' },
    { name: 'Isidro', role: 'Đồng đội Guts', description: 'Một cậu bé trộm cắp muốn trở thành kiếm sĩ vĩ đại nhất thế giới, coi Guts là sư phụ.' },
    { name: 'Schierke', role: 'Phù thủy nhỏ', description: 'Một phù thủy tài năng, người giúp Guts kiểm soát bộ giáp Berserker thông qua phép thuật tâm linh.' },
    { name: 'Farnese de Vandimion', role: 'Đồng đội Guts', description: 'Cựu lãnh đạo Đội kỵ binh Thánh thiết, sau này từ bỏ đức tin mù quáng để học phép thuật từ Schierke.' },
    { name: 'Serpico', role: 'Đồng đội Guts', description: 'Anh trai cùng cha khác mẹ của Farnese, một kiếm sĩ tài ba sử dụng sức mạnh của gió.' },
    { name: 'Skull Knight', role: 'Thực thể bí ẩn', description: 'Một kỵ sĩ xương cổ xưa, kẻ thù truyền kiếp của God Hand, thường xuyên giúp đỡ Guts trong những lúc nguy cấp.' },
    { name: 'Void', role: 'Lãnh đạo God Hand', description: 'Thành viên lâu đời nhất của God Hand, người thực hiện các nghi lễ hiến tế.' },
    { name: 'Slan', role: 'God Hand', description: 'Nữ thành viên duy nhất của God Hand, đại diện cho dục vọng và sự tàn bạo.' },
    { name: 'Ubik', role: 'God Hand', description: 'Thành viên God Hand chuyên về việc thao túng tâm trí và tạo ra các ảo ảnh.' },
    { name: 'Conrad', role: 'God Hand', description: 'Thành viên God Hand đại diện cho bệnh tật và sự thối rữa.' },
    { name: 'Zodd the Immortal', role: 'Apostle (Sứ đồ)', description: 'Một chiến binh quỷ mạnh mẽ, luôn tìm kiếm những đối thủ xứng tầm để chiến đấu suốt hàng trăm năm.' },
    { name: 'Grunbeld', role: 'Apostle / Kỵ sĩ Rồng lửa', description: 'Một thành viên của Băng Ưng mới, sở hữu cơ thể bằng pha lê và khả năng phun lửa.' },
    { name: 'Locus', role: 'Apostle / Kỵ sĩ Ánh trăng', description: 'Một kỵ sĩ tài ba, trung thành tuyệt đối với Griffith trong Băng Ưng mới.' },
    { name: 'Irvine', role: 'Apostle / Cung thủ', description: 'Một cung thủ mù bí ẩn, có khả năng bắn ra những mũi tên quỷ dị từ cơ thể mình.' },
    { name: 'Rakshas', role: 'Apostle / Sát thủ', description: 'Một thực thể bóng tối luôn che giấu khuôn mặt, phục vụ Griffith như một sát thủ.' },
    { name: 'Rickert', role: 'Thành viên Băng Ưng cũ', description: 'Người duy nhất không tham gia Nhật Thực, sau này trở thành một thợ rèn tài năng chế tạo vũ khí cho Guts.' },
    { name: 'Evarella', role: 'Tiên tộc (Elf)', description: 'Người bạn đồng hành nhỏ bé của Schierke, luôn nhắc nhở cô về các quy tắc phép thuật.' },
    { name: 'Flora', role: 'Phù thủy tối cao', description: 'Sư phụ của Schierke, một người bạn cũ của Skull Knight, người đã bảo vệ rừng linh hồn.' },
    { name: 'Judeau', role: 'Thành viên Băng Ưng cũ', description: 'Một chuyên gia ném dao, luôn quan tâm đến Casca và Guts, đã hy sinh trong Nhật Thực.' },
    { name: 'Pippin', role: 'Thành viên Băng Ưng cũ', description: 'Một chiến binh khổng lồ với sức mạnh phi thường, đã hy sinh để bảo vệ đồng đội trong Nhật Thực.' },
    { name: 'Corkus', role: 'Thành viên Băng Ưng cũ', description: 'Một người thực dụng, ban đầu ghét Guts nhưng sau đó đã chấp nhận anh như một phần của băng.' },
    { name: 'Gaston', role: 'Thành viên Băng Ưng cũ', description: 'Đội phó của Guts trong Băng Ưng, người luôn mơ ước mở một cửa hàng quần áo.' },
    { name: 'Godot', role: 'Thợ rèn', description: 'Người đã rèn ra thanh kiếm Dragon Slayer và chăm sóc Guts sau sự kiện Nhật Thực.' },
    { name: 'Erica', role: 'Cháu gái Godot', description: 'Một cô bé tốt bụng, người coi Guts và Rickert như gia đình của mình.' },
    { name: 'Sonia', role: 'Nhà tiên tri', description: 'Một cô bé có khả năng ngoại cảm, trung thành tuyệt đối với Griffith trong Băng Ưng mới.' },
    { name: 'Mule Wolflame', role: 'Kỵ sĩ trẻ', description: 'Một quý tộc trẻ tuổi gia nhập Băng Ưng mới sau khi được Griffith cứu mạng.' },
    { name: 'Silat', role: 'Lãnh đạo tộc Bakiraka', description: 'Một sát thủ tài năng sử dụng các loại vũ khí kỳ lạ, luôn tìm cách khôi phục danh dự cho bộ tộc mình.' }
  ]
};
