CREATE DATABASE  IF NOT EXISTS `profindo_recruitment_test` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `profindo_recruitment_test`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: profindo_recruitment_test
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tabel_obat`
--

DROP TABLE IF EXISTS `tabel_obat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tabel_obat` (
  `kodeObat` varchar(20) NOT NULL,
  `namaObat` varchar(100) NOT NULL,
  `hargaObat` int NOT NULL,
  `sisaObat` int DEFAULT NULL,
  `tanggalObat` date DEFAULT NULL,
  PRIMARY KEY (`kodeObat`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tabel_obat`
--

LOCK TABLES `tabel_obat` WRITE;
/*!40000 ALTER TABLE `tabel_obat` DISABLE KEYS */;
INSERT INTO `tabel_obat` VALUES ('CM001','Prove D3-1000',54000,367,'2021-06-12'),('CM002','Becom-Zet',43000,76,'2022-01-02'),('CM003','Megazing',33000,150,'2021-01-13'),('CM004','Zegavit',40000,600,'2022-07-01'),('CM005','Panadol',26000,200,'2022-09-03'),('CM006','Zenirex',27000,146,'2021-11-27'),('CM007','Amoxilin',19000,90,'2021-10-19'),('CM008','Betadine',13000,89,'2021-12-13'),('CM009','Gliserol',36000,240,'2022-06-04'),('CM010','Promag',11000,241,'2021-03-11');
/*!40000 ALTER TABLE `tabel_obat` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-21  2:55:25
