-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 28, 2025 at 02:50 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `onlinebirth`
--

-- --------------------------------------------------------

--
-- Table structure for table `birth`
--

CREATE TABLE `birth` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `date_of_birth` varchar(100) NOT NULL,
  `place_of_birth` varchar(100) NOT NULL,
  `parents_name` varchar(100) NOT NULL,
  `status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `birth`
--

INSERT INTO `birth` (`id`, `name`, `email`, `date_of_birth`, `place_of_birth`, `parents_name`, `status`) VALUES
(11, 'Ammu', 'Ammu@gmail.com', '2018-04-20', 'Kumbakonam', 'Alagar', 'canceled'),
(12, 'Aarthi', 'aarthi@gmail.com', '2002-12-27', 'Kumbakonam', 'Manoj', 'approved'),
(13, 'Abi', 'abirami@gmail.com', '2025-03-28', 'Ariyalur', 'Ravi', 'pending');

-- --------------------------------------------------------

--
-- Table structure for table `death`
--

CREATE TABLE `death` (
  `id` int(200) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `date_of_death` varchar(100) NOT NULL,
  `place_of_death` varchar(100) NOT NULL,
  `cause_of_death` varchar(100) NOT NULL,
  `status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `death`
--

INSERT INTO `death` (`id`, `name`, `email`, `date_of_death`, `place_of_death`, `cause_of_death`, `status`) VALUES
(4, 'moni', 'm@gmail.com', '2025-03-28', 'kum', 'fever', 'approved'),
(6, 'one', 'one@gmail.com', '2025-03-27', 'thanjavur', 'cancer', 'pending'),
(7, 'Two', 'two@gmail.com', '2025-03-28', 'thirchy', 'fever', 'approved'),
(8, 'Maha', 'Maha@gmail.com', '2025-03-28', 'kumbakonam', 'fever', 'approved');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_name`, `email`, `password`) VALUES
('akshaya', 'akshu@gmail.com', '123456'),
('makesh', 'makesh@gmail.com', 'asdfgh'),
('one', 'one@gmail.com', 'one'),
('one1', 'one1@gmail.com', '12345'),
('dhanam', 'dhanam@gmail.com', 'dhanam'),
('dhana', 'dhanam@gmail.com', '12345'),
('dhana', 'dhanam@gmail.com', '12345'),
('dhana', 'dhanam@gmail.com', '12345'),
('dhana', 'dhanam@gmail.com', '12345'),
('monika', 'monika@gmail.com', '12345'),
('hema', 'hema@gmail.com', '12345'),
('aarthi', 'aarthi@gmail.com', '$2y$10$9Wh2GQv2K6SzkQSe9FMSL.05hnSUrhfRpOVVtUibgPRCU1Z.y0ysu');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `birth`
--
ALTER TABLE `birth`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `death`
--
ALTER TABLE `death`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `birth`
--
ALTER TABLE `birth`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `death`
--
ALTER TABLE `death`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
