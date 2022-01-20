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
-- Table structure for table `tabel_transaksi`
--

DROP TABLE IF EXISTS `tabel_transaksi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tabel_transaksi` (
  `idTransaksi` varchar(50) NOT NULL,
  `kodeObat` varchar(20) NOT NULL,
  `jumlahJual` int NOT NULL,
  `kodeApoteker` varchar(45) NOT NULL,
  `tanggalBeli` datetime NOT NULL,
  PRIMARY KEY (`idTransaksi`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tabel_transaksi`
--

LOCK TABLES `tabel_transaksi` WRITE;
/*!40000 ALTER TABLE `tabel_transaksi` DISABLE KEYS */;
INSERT INTO `tabel_transaksi` VALUES ('TRK001','CM004',16,'AP001','2021-07-30 00:00:00'),('TRK002','CM009',34,'AP001','2021-09-08 00:00:00'),('TRK003','CM007',21,'AP002','2021-08-13 00:00:00'),('TRK004','CM001',26,'AP002','2021-08-27 00:00:00'),('TRK005','CM004',65,'AP002','2021-03-09 00:00:00'),('TRK006','CM009',32,'AP001','2021-06-09 00:00:00'),('TRK007','CM005',13,'AP002','2021-09-16 00:00:00'),('TRK008','CM003',11,'AP001','2021-09-28 00:00:00'),('TRK009','CM009',28,'AP001','2021-10-15 00:00:00'),('TRK010','CM002',44,'AP002','2021-10-20 00:00:00'),('TRK011','CM004',20,'AP001','2022-01-19 00:00:00');
/*!40000 ALTER TABLE `tabel_transaksi` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-21  2:55:24
