import {
  Award,
  Clock,
  Droplets,
  Leaf,
  ShieldCheck,
  Star,
  Zap,
} from "lucide-react";
import React from "react";

export interface Category {
  name: string;
  description: string;
  image: string;
}

export interface Benefit {
  icon: React.ReactNode;
  title: string;
  text: string;
}

export interface Product {
  id: number;
  category: string;
  categoryName: string;
  name: string;
  tag: string;
  price: string;
  image: string;
  description: string;
  benefits: Benefit[];
  features: string[];
}

export const categories: Record<string, Category> = {
  "dinh-duong": {
    name: "Dinh dưỡng",
    description:
      "Giải pháp dinh dưỡng toàn diện cho mọi lứa tuổi từ Nutrilite.",
    image: "/product-protein.png",
  },
  "giam-can": {
    name: "Giảm cân",
    description:
      "Chế độ dinh dưỡng thông minh giúp bạn duy trì vóc dáng lý tưởng.",
    image: "/hero-premium.png",
  },
  "tim-mach": {
    name: "Tim mạch",
    description:
      "Hỗ trợ tim mạch và huyết áp tối ưu từ nguồn gốc thực vật tinh khiết.",
    image: "/product-omega3.png",
  },
  "tieu-hoa": {
    name: "Tiêu hóa",
    description: "Cải thiện hệ tiêu hóa và khả năng hấp thụ dưỡng chất.",
    image: "/product-immunity.png",
  },
};

export const products: Product[] = [
  {
    id: 1,
    category: "dinh-duong",
    categoryName: "Dinh dưỡng",
    name: "Nutrilite All Plant Protein",
    tag: "Sức khỏe nền tảng",
    price: "850.000₫",
    image: "/product-protein.png",
    description:
      "Sản phẩm cung cấp nguồn đạm thực vật chất lượng cao từ đậu nành, lúa mì và đậu Hà Lan. Giúp cơ thể phục hồi năng lượng, hỗ trợ cơ bắp và tăng cường sức đề kháng.",
    benefits: [
      {
        icon: <Leaf className="w-5 h-5 text-brand" />,
        title: "100% Thực vật",
        text: "Nguồn đạm tinh khiết từ thiên nhiên",
      },
      {
        icon: <ShieldCheck className="w-5 h-5 text-brand" />,
        title: "Chất lượng cao",
        text: "Chứa đủ 9 loại acid amin thiết yếu",
      },
      {
        icon: <Zap className="w-5 h-5 text-brand" />,
        title: "Phục hồi",
        text: "Cung cấp năng lượng bền bỉ cho ngày dài",
      },
    ],
    features: [
      "Không chứa cholesterol",
      "Ít chất béo bão hòa",
      "Dễ tiêu hóa và hấp thụ",
      "Thành phần không biến đổi gen (Non-GMO)",
    ],
  },
  {
    id: 2,
    category: "tim-mach",
    categoryName: "Tim mạch",
    name: "Nutrilite Salmon Omega-3",
    tag: "Hỗ trợ tim mạch",
    price: "920.000₫",
    image: "/product-omega3.png",
    description:
      "Hỗ trợ cung cấp các acid béo không no EPA và DHA tốt cho tim mạch và não bộ. Được chiết xuất từ cá hồi vùng biển lạnh tinh khiết.",
    benefits: [
      {
        icon: <Droplets className="w-5 h-5 text-blue-500" />,
        title: "Dầu cá tinh khiết",
        text: "Nguồn Omega-3 từ cá hồi chất lượng",
      },
      {
        icon: <ShieldCheck className="w-5 h-5 text-blue-500" />,
        title: "Hỗ trợ tim",
        text: "Giúp duy trì chỉ số triglyceride ổn định",
      },
      {
        icon: <Clock className="w-5 h-5 text-blue-500" />,
        title: "Bền vững",
        text: "Quy trình khai thác bảo vệ môi trường",
      },
    ],
    features: [
      "Hàm lượng EPA/DHA tối ưu",
      "Công nghệ khử mùi tiên tiến",
      "Bổ sung Vitamin E chống oxy hóa",
      "Nguyên liệu cá hồi Na-uy",
    ],
  },
  {
    id: 3,
    category: "dinh-duong",
    categoryName: "Dinh dưỡng",
    name: "Nutrilite Bio C Plus",
    tag: "Tăng cường đề kháng",
    price: "460.000₫",
    image: "/product-vitaminc.png",
    description:
      "Bổ sung Vitamin C từ bột đông khô quả Acerola Cherry kết hợp với dưỡng chất thực vật từ các loại quả họ cam quýt.",
    benefits: [
      {
        icon: <Star className="w-5 h-5 text-orange-500" />,
        title: "Đề kháng tự nhiên",
        text: "Tăng cường hệ miễn dịch tối ưu",
      },
      {
        icon: <Leaf className="w-5 h-5 text-orange-500" />,
        title: "Dưỡng chất thực vật",
        text: "Citrus Bioflavonoids giúp hấp thụ C tốt hơn",
      },
      {
        icon: <ShieldCheck className="w-5 h-5 text-orange-500" />,
        title: "Giải phóng chậm",
        text: "Duy trì nồng độ Vitamin C trong 8 giờ",
      },
    ],
    features: [
      "Acerola Cherry tự nhiên",
      "Công nghệ giải phóng chậm",
      "Chất chống oxy hóa mạnh mẽ",
      "An toàn cho dạ dày",
    ],
  },
  {
    id: 4,
    category: "dinh-duong",
    categoryName: "Dinh dưỡng",
    name: "Nutrilite Vitamin B Plus",
    tag: "Tăng cường năng lượng",
    price: "550.000₫",
    image: "/product-vitamin.png",
    description:
      "Giải pháp toàn diện cung cấp 8 loại Vitamin B thiết yếu giúp chuyển hóa năng lượng hiệu quả và giảm mệt mỏi.",
    benefits: [
      {
        icon: <Zap className="w-5 h-5 text-yellow-500" />,
        title: "Năng lượng",
        text: "Cải thiện quá trình chuyển hóa thức ăn",
      },
      {
        icon: <Clock className="w-5 h-5 text-yellow-500" />,
        title: "Kết nối",
        text: "Tốt cho hệ thần kinh và sự tỉnh táo",
      },
      {
        icon: <Award className="w-5 h-5 text-yellow-500" />,
        title: "Duy nhất",
        text: "Chứa tảo xoắn Spirulina đậm đặc",
      },
    ],
    features: [
      "Đầy đủ 8 loại Vitamin B",
      "Bổ sung tảo Spirulina",
      "Viên nén 2 lớp độc đáo",
      "Duy trì năng lượng suốt ngày",
    ],
  },
  {
    id: 5,
    category: "tieu-hoa",
    categoryName: "Tiêu hóa",
    name: "Nutrilite Probiotic",
    tag: "Hỗ trợ tiêu hóa",
    price: "780.000₫",
    image: "/product-immunity.png",
    description:
      "Cung cấp 5 chủng lợi khuẩn được nghiên cứu lâm sàng, giúp cân bằng hệ vi sinh đường ruột và tăng cường sức khỏe tiêu hóa.",
    benefits: [
      {
        icon: <ShieldCheck className="w-5 h-5 text-green-500" />,
        title: "Lợi khuẩn",
        text: "6.3 tỷ đơn vị lợi khuẩn sống",
      },
      {
        icon: <Droplets className="w-5 h-5 text-green-500" />,
        title: "Cân bằng",
        text: "Hỗ trợ hệ vi sinh vật bản địa",
      },
      {
        icon: <Award className="w-5 h-5 text-green-500" />,
        title: "Bền bỉ",
        text: "Chịu được môi trường acid dạ dày",
      },
    ],
    features: [
      "5 chủng lợi khuẩn độc quyền",
      "Bổ sung chất xơ FOS (Prebiotic)",
      "Không cần bảo quản lạnh",
      "An toàn cho cả trẻ em",
    ],
  },
  {
    id: 6,
    category: "giam-can",
    categoryName: "Giảm cân",
    name: "Nutrilite Bodykey Carbon Reduce",
    tag: "Kiểm soát cân nặng",
    price: "1.200.000₫",
    image: "/product-protein.png",
    description:
      "Hỗ trợ kiểm soát cân nặng bằng cách hạn chế quá trình chuyển hóa carbohydrate thành chất béo. Đồng hành cùng bạn trong hành trình lấy lại vóc dáng.",
    benefits: [
      {
        icon: <Zap className="w-5 h-5 text-brand" />,
        title: "Kiểm soát",
        text: "Hỗ trợ quản lý cân nặng khoa học",
      },
      {
        icon: <Award className="w-5 h-5 text-brand" />,
        title: "Chiết xuất tự nhiên",
        text: "Từ đậu tây trắng và đậu nành",
      },
      {
        icon: <ShieldCheck className="w-5 h-5 text-brand" />,
        title: "An toàn",
        text: "Không gây mệt mỏi hay mất nước",
      },
    ],
    features: [
      "Ức chế enzyme tiêu hóa tinh bột",
      "Thành phần thảo dược 100%",
      "Cơ chế giảm cân sinh học",
      "Phù hợp với người ăn kiêng",
    ],
  },
];
