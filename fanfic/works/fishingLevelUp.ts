
import { FanficWork } from '../types';

export const FISHING_LEVEL_UP: FanficWork = {
  id: 'fishing-level-up',
  title: 'Câu Cá Vạn Cân, Ta Ở Chân Trời Góc Bể Cày Cấp',
  country: 'Trung',
  description: 'Một câu chuyện tu tiên và cày cấp độc đáo thông qua việc câu cá ở những vùng biển huyền bí nhất.',
  plot: 'Lâm Phàm là một thanh niên bình thường vô tình xuyên không đến một thế giới tu chân nơi đại dương chiếm phần lớn diện tích. Tại đây, anh sở hữu một chiếc cần câu thần kỳ và hệ thống "Câu Cá Vạn Cân". Mỗi khi câu được một con cá, anh không chỉ nhận được linh khí để tu luyện mà còn có cơ hội nhận được các loại công pháp, đan dược và bảo vật quý hiếm. Lâm Phàm bắt đầu hành trình từ một ngư dân nhỏ bé, chèo thuyền ra khơi, chinh phục những vùng biển nguy hiểm nhất, câu lên những con cá khổng lồ nặng hàng vạn cân để trở thành chí tôn của biển cả.',
  worldSetting: 'Thế giới đại dương vô tận với các hòn đảo tu tiên, các rạn san hô huyền bí và những vực thẳm sâu thẳm nơi các loài thủy quái cổ xưa sinh sống. Các cấp độ tu luyện gắn liền với chất lượng của cá câu được: Phàm Ngư, Linh Ngư, Yêu Ngư, Thần Ngư và Chí Tôn Ngư.',
  characters: [
    { name: 'Lâm Phàm', role: 'Nhân vật chính', description: 'Chủ nhân của cần câu Vạn Cân, một người kiên trì và đầy mưu mẹo trong việc câu cá.' },
    { name: 'Thanh Hà', role: 'Nữ chính / Tiên tử', description: 'Con gái của một đảo chủ, người đã cứu Lâm Phàm khi anh mới đến thế giới này.' },
    { name: 'Lão Ngư', role: 'Sư phụ', description: 'Một ông lão câu cá bí ẩn đã truyền dạy cho Lâm Phàm những kỹ thuật câu cá cổ xưa.' },
    { name: 'Hải Long', role: 'Đối thủ', description: 'Thiên tài của Hải Long Bang, luôn coi thường kỹ năng câu cá của Lâm Phàm.' },
    { name: 'Tiểu Linh', role: 'Linh thú', description: 'Một chú hải cẩu thông minh chuyên giúp Lâm Phàm tìm kiếm các bãi cá quý.' },
    { name: 'Đại Hổ', role: 'Bạn thân', description: 'Một ngư dân lực lưỡng, người luôn đồng hành cùng Lâm Phàm trên chiếc thuyền nhỏ.' },
    { name: 'Tô Nguyệt', role: 'Thương nhân', description: 'Chủ một hiệu buôn cá lớn, người luôn mua lại những con cá hiếm của Lâm Phàm với giá cao.' },
    { name: 'Hắc Kình', role: 'Phản diện', description: 'Thủ lĩnh của băng hải tặc chuyên cướp bóc các ngư dân tu tiên.' },
    { name: 'Mộc Lão', role: 'Trưởng lão', description: 'Người quản lý khu vực câu cá công cộng của đảo Thanh Vân.' },
    { name: 'Tuyết Nhi', role: 'Sư muội', description: 'Một cô gái trẻ trung, đam mê học hỏi các kỹ thuật câu cá mới từ Lâm Phàm.' },
    { name: 'Lôi Bá', role: 'Đảo chủ', description: 'Cha của Thanh Hà, một cao thủ tu vi thâm hậu luôn bảo vệ hòn đảo.' },
    { name: 'Phong Vân', role: 'Kiếm sĩ', description: 'Một lãng khách thường xuyên thuê thuyền của Lâm Phàm để ra khơi săn quái vật.' },
    { name: 'Minh Châu', role: 'Công chúa biển', description: 'Một nhân ngư xinh đẹp đã giúp Lâm Phàm tìm thấy vực thẳm Thần Ngư.' },
    { name: 'Hỏa Ma', role: 'Dị năng giả', description: 'Kẻ có khả năng điều khiển lửa dưới nước, một đối thủ đáng gờm của Lâm Phàm.' },
    { name: 'Thạch Đầu', role: 'Thợ đóng thuyền', description: 'Người đã chế tạo ra chiếc thuyền "Vạn Dặm" cho Lâm Phàm.' },
    { name: 'Linh Lung', role: 'Dược sư', description: 'Chuyên gia chế biến các loại cá thành đan dược tăng cường tu vi.' },
    { name: 'Vô Huyết', role: 'Sát thủ', description: 'Kẻ chuyên ám sát các ngư dân tài năng để cướp cần câu thần kỳ.' },
    { name: 'Bạch Vân', role: 'Đạo sĩ', description: 'Một người tu hành theo lối khổ hạnh, thường xuyên đàm đạo cùng Lâm Phàm.' },
    { name: 'Hồng Diệp', role: 'Nữ hiệp', description: 'Sử dụng roi da để chiến đấu với các loài thủy quái hung dữ.' },
    { name: 'Kim Quy', role: 'Thần thú', description: 'Một con rùa khổng lồ nghìn năm tuổi, người canh giữ kho báu dưới đáy biển.' },
    { name: 'Thanh Phong', role: 'Đệ tử', description: 'Người đầu tiên xin Lâm Phàm nhận làm đồ đệ học nghề câu cá.' },
    { name: 'Tử Yên', role: 'Ảo thuật gia', description: 'Sử dụng các ảo ảnh để dụ cá vào lưới của Lâm Phàm.' },
    { name: 'Đại Bàng', role: 'Trinh sát', description: 'Một con chim biển khổng lồ giúp Lâm Phàm quan sát từ trên cao.' },
    { name: 'Lão Hạc', role: 'Tiên nhân', description: 'Một vị tiên thường xuyên xuất hiện để thử thách lòng kiên nhẫn của Lâm Phàm.' },
    { name: 'Tiểu Ngư', role: 'Em gái Đại Hổ', description: 'Một cô bé khéo tay chuyên đan lưới và sửa chữa cần câu.' },
    { name: 'Hải Vương', role: 'Vua biển', description: 'Thực thể tối cao cai quản toàn bộ đại dương, mục tiêu cuối cùng của Lâm Phàm.' },
    { name: 'Hắc Ám', role: 'Thần chết biển', description: 'Kẻ gieo rắc nỗi sợ hãi cho mọi ngư dân khi ra khơi vào ban đêm.' },
    { name: 'Ánh Sáng', role: 'Nữ thần biển', description: 'Người ban phước lành cho những ngư dân có tâm hồn trong sáng.' },
    { name: 'Vạn Cân', role: 'Linh hồn cần câu', description: 'Ý chí của chiếc cần câu thần kỳ, thường xuyên giao tiếp với Lâm Phàm.' },
    { name: 'Kiếm Tâm', role: 'Kiếm khách', description: 'Một người bạn đồng hành trung thành, bảo vệ Lâm Phàm trong những chuyến ra khơi xa.' }
  ]
};
