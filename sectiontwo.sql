-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 30, 2023 at 11:07 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `oceanone`
--

-- --------------------------------------------------------

--
-- Table structure for table `sectiontwo`
--

CREATE TABLE `sectiontwo` (
  `id` int(11) NOT NULL,
  `title` varchar(20) NOT NULL,
  `body` text NOT NULL,
  `caption` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sectiontwo`
--

INSERT INTO `sectiontwo` (`id`, `title`, `body`, `caption`) VALUES
(1, 'ALIGN', '66% of people (73% of Millennials) are willing to pay more for products and services from companies committed to positive social and environmental impact.', 'LEARN MORE'),
(2, 'KICKSTART', 'Ocean One are a turnkey solution to begin the journey of reducing your business’s environmental footprint or going plastic neutral.', 'START ACTION'),
(3, 'AMPLIFY', 'Is your actions already making strides in its commitment to sustainability? Measure your action success using IMPACT.', 'SEE HOW');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sectiontwo`
--
ALTER TABLE `sectiontwo`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
