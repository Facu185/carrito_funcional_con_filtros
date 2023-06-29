-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-06-2023 a las 20:04:40
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `producto`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `precio` int(11) DEFAULT NULL,
  `img` varchar(100) DEFAULT NULL,
  `oferta` tinyint(1) DEFAULT NULL,
  `condicion` varchar(20) DEFAULT NULL,
  `categoria` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `precio`, `img`, `oferta`, `condicion`, `categoria`) VALUES
(3, 'harina', 120, 'imagenes/harina.png', 1, 'nuevo', 'comestibles'),
(4, 'aceite', 80, 'imagenes/Aceite.jpg', 0, 'nuevo', 'comestibles'),
(5, 'arroz', 60, 'imagenes/arroz.png', 1, 'nuevo', 'comestibles'),
(6, 'Buzo rojo', 300, 'imagenes/buzo_rojo.jpg', 1, 'nuevo', 'ropa'),
(7, 'Conjunto gris', 400, 'imagenes/conjunto_gris.png', 0, 'nuevo', 'ropa'),
(8, 'Conjunto rojo', 500, 'imagenes/conjunto_rojo.png', 0, 'nuevo', 'ropa'),
(10, 'Samsung a53', 19000, 'imagenes/a53.jpg', 0, 'usado', 'celulares'),
(11, 'Samsung a23', 9000, 'imagenes/a23.jpg', 0, 'usado', 'celulares'),
(12, 'Iphone se', 14000, 'imagenes/se.jpg', 0, 'usado', 'celulares');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
