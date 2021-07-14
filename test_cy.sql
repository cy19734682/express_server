/*
Navicat MySQL Data Transfer

Source Server         : cy_test
Source Server Version : 80025
Source Host           : localhost:3306
Source Database       : test_cy

Target Server Type    : MYSQL
Target Server Version : 80025
File Encoding         : 65001

Date: 2021-07-14 09:48:42
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `author` varchar(100) DEFAULT NULL,
  `pic` varchar(255) DEFAULT NULL,
  `content` varchar(512) DEFAULT NULL,
  `tag` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES ('1', '大奉打更人', '卖报小郎君', 'https://read.qidian.com/chapter/hbIfVTSpixsEGYrhBm4H8w2/UtU3j7SgUdnM5j8_3RRvhw2', '修仙觅长生，热血任逍遥，踏莲曳波涤剑骨，凭虚御风塑圣魂！', '穿越,轻松，阵法');
INSERT INTO `article` VALUES ('3', '夜的命名术', '会说话的肘子', 'https://read.qidian.com/chapter/O9zPuzOQBNt7DVpbqm07HA2/7mDVnIw2w_LwrjbX3WA1AA2', '重生过去、畅想未来、梦幻现实，再塑传奇人生！', '位面,坚毅,学生,强者回归,无敌文');
INSERT INTO `article` VALUES ('4', '从红月开始', '黑山老鬼', 'https://read.qidian.com/chapter/EECQFuYaOdYlePy7xMLiNw2/Bm_gHo7IXXhOBDFlr9quQA2', '星海漫游，时空穿梭，机械科技，目标是未知的星辰大海！', '科幻,进化变异');
INSERT INTO `article` VALUES ('5', '深空彼岸', '辰东', 'https://read.qidian.com/chapter/D4Pic8a3frqLTMDvzUJZaQ2/pdyqJ3Rujv62uJcMpdsVgA2', '重生过去、畅想未来、梦幻现实，再塑传奇人生！', '热血');
INSERT INTO `article` VALUES ('6', '我就是不按套路出牌', '百分之七', 'https://read.qidian.com/chapter/N9V9HniZ5BjVl9ByXxZ_TQ2/GudMHOwTATPM5j8_3RRvhw2', '热血的少年，为打破次元壁一往无前！', '爆笑,轻松');
INSERT INTO `article` VALUES ('7', '人族镇守使 ', '白驹易逝', 'https://read.qidian.com/chapter/NRLZdl9YG2KXfJNNZ-YUzw2/VT8ViOMzY3hMs5iq0oQwLQ2', '心潮澎湃，无限幻想，迎风挥击千层浪，少年不败热血！', '穿越,系统流,重生');
INSERT INTO `article` VALUES ('8', '太乙', '雾外江山', 'https://read.qidian.com/chapter/K4xkwKSrmR9TPkn-OiZztA2/eSlFKP1Chzg1', '修仙觅长生，热血任逍遥，踏莲曳波涤剑骨，凭虚御风塑圣魂！', '仙侠,幻想修仙');
INSERT INTO `article` VALUES ('9', '这个人仙太过正经', '言归正传', 'https://read.qidian.com/chapter/-pympH92TeVREKyOHuaidQ2/6fB3DwCT_6SaGfXRMrUjdw2', '修仙觅长生，热血任逍遥，踏莲曳波涤剑骨，凭虚御风塑圣魂！', '仙侠,修真文明');
INSERT INTO `article` VALUES ('10', '稳住别浪', '跳舞', 'https://read.qidian.com/chapter/LQhsH9xCCe-dL1xidHTgxA2/4FSJqxpuQlNMs5iq0oQwLQ2', '重生过去、畅想未来、梦幻现实，再塑传奇人生！', '都市,都市异能');
INSERT INTO `article` VALUES ('11', '大梦主', '忘语', 'https://read.qidian.com/chapter/uQ7kVFpQXO1tl3KA8Mw5oQ2/eSlFKP1Chzg1', '修仙觅长生，热血任逍遥，踏莲曳波涤剑骨，凭虚御风塑圣魂！', '凡人流,坚毅,西游,豪门');
INSERT INTO `article` VALUES ('12', '全职艺术家', '我最白', 'https://read.qidian.com/chapter/YtMdsz0nhGolePy7xMLiNw2/OtBx1DMXZvJOBDFlr9quQA2', '重生过去、畅想未来、梦幻现实，再塑传奇人生！', '感情,明星,淡定,职场');
