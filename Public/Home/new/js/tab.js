//��optionClass: ������󹫹���class������ΨһclassΪoptionClass1, optionClass2 .....
//	��Ӧ�����ݹ���classΪ����classΪoptionClass_con������ΨһclassΪoptionClass_con1, optionClass_con2 .....
// mouse Ϊ��궯������Ϊ��click/hover ��ѡһ 
// btnAddClass Ϊ��ť��ǰ��ʾ����ʽ�� ����Ҫ����Ϊnull��
function tabChange(optionClass, mouse, btnAddClass) {
	var $action = null;
	$('.' + optionClass).each(function(index) {
		var run = function() {
			if (btnAddClass != null) {
				$('.' + optionClass).removeClass(btnAddClass);
				$('.' + optionClass + (index+1)).addClass(btnAddClass);
			}
			$('.' + optionClass + "_con").hide();
			$('.' + optionClass + "_con" + (index+1)).show();
		};
		if (mouse == "click") {
			$('.' + optionClass + (index+1)).click(function() {
				run();
			});	
		}
		if (mouse == "hover") {
			$('.' + optionClass + (index+1))
				.mouseover(function() {
					$action = setTimeout(run, 200);
				})
				.mouseout(function() {
					clearTimeout($action);
				});;
		}
	});
}