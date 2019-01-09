<?php
/**
 * Created by PhpStorm.
 * User: taojin
 * Date: 2019/1/5
 * Time: 下午3:07
 */

namespace Home\Controller;


class StaticController extends HomeCommonController
{
    // 关于创狮
    public function about() {
        $this->display();
    }
	
	//视觉设计
	public function vdesign() {
		$this->display();
	}
	
	//问答营销
	public function answer() {
		$this->display();
	}
	
	//新闻营销
	public function news() {
		$this->display();
	}
	
	//seo营销
	public function seo() {
		$this->display();
	}
	
	//SEM
	public function sem() {
		$this->display();
	}
	
	//服务总体介绍
	public function service() {
		$this->display();
	}
	
	//技术开发专区
	public function technics() {
		$this->display();
	}
	
	//精品案例封面
	public function cases() {
		$this->display();
	}
}