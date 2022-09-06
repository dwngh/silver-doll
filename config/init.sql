CREATE DATABASE sliver;
USE sliver;

CREATE TABLE `items` (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `name` varchar(200) NOT NULL,
 `status` tinyint(1) NOT NULL DEFAULT '1',
 `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `items` (`id`, `name`, `status`, `created_at`) VALUES
(1, 'Item 1', 1, '2022-08-30 23:50:40'),
(2, 'Item 2', 0, '2022-08-30 23:50:41'),
(3, 'Bugbug', 1, '2022-08-30 23:50:42');
