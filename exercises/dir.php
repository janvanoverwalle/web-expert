<?php
	if (file_exists(dirname(__DIR__).'\\index.html')) {
		echo "<div>", "\r\n", ahref('../index.html', 'Index'), "\r\n", "</div>", "\r\n";
	}
	
	if (file_exists(__DIR__.'\\vb')) {
		echo "<div>", "\r\n";
		echo h('Voorbeelden', 2), "\r\n";
		if (file_exists(__DIR__.'\\vb\\index.html')) {
			$list = array(ahref('vb/index.html', 'Voorbeeld'));
			echo ulist($list);
		}
		echo "</div>", "\r\n";
	}
	
	for ($currentChapter  = 1; $currentChapter  < 9; $currentChapter ++) {
		$currentChapterString = sprintf('H%02d', $currentChapter);
		$exercises = array();
		
		if (file_exists(__DIR__.'\\'.$currentChapterString)) {			
			// Only print the Chpater title if there's a file in the directory
			if (!directoryContains(__DIR__.'\\'.$currentChapterString, array('html', 'php'))) {
				continue;
			}
			
			echo "<div>", "\r\n";
			echo h('Hoofdstuk '.$currentChapter, 2), "\r\n";
			$filename = strtolower($currentChapterString).'oef'.sprintf('%02d', count($exercises) + 1).'.html';
			
			while (file_exists(__DIR__.'\\'.$currentChapterString.'\\'.$filename)) {
				$text = 'Oefening '.(count($exercises) + 1);
				$exercises[] = ahref($currentChapterString.'/'.$filename, $text);
				$filename = strtolower($currentChapterString).'oef'.sprintf('%02d', count($exercises) + 1).'.html';
			}
			echo ulist($exercises);
			echo "</div>", "\r\n";
		}
	}
	
	function h($content, $lvl) {
		return "<h".$lvl.">".$content."</h".$lvl.">";
	}
	
	function ahref($url, $text) {
		return "<a href='".$url."'>".$text."</a>";
	}
	
	function ulist($items) {
		if (empty($items)) {
			return "";
		}
		
		$result = "<ul>\r\n";
		foreach ($items as $item) {
			$result .= "<li>".$item."</li>\r\n";
		}
		$result .= "</ul>\r\n";
		
		return $result;
	}
	
	function directoryContains($dir, $extensions = array()) { 
		if (empty($extensions) || !is_array($extensions) || !is_dir($dir))
			return false;
		
		foreach ($extensions as $ext) {
			if (count(glob($dir . '/*.' . $ext)) > 0)
				return true;
		}
		
		return false;
	}
?>