<?php

$command = <<<EOT
	pwd
	cd ../
	pwd
	git remote -v
	git pull origin master	
EOT;
system($command);
