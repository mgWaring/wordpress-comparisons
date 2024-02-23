-- mcreate databases
CREATE DATABASE IF NOT EXISTS `wordpress1`;
CREATE DATABASE IF NOT EXISTS `wordpress2`;
CREATE DATABASE IF NOT EXISTS `wordpress3`;

-- Grant all privileges to the user 'wordpress' on the databases 'wordpress1', 'wordpress2', and 'wordpress3'
GRANT ALL PRIVILEGES ON wordpress1.* TO 'wordpress'@'%';
GRANT ALL PRIVILEGES ON wordpress2.* TO 'wordpress'@'%';
GRANT ALL PRIVILEGES ON wordpress3.* TO 'wordpress'@'%';
FLUSH PRIVILEGES;