$(document).ready(function() {
	$('input').on('keydown', function() {
		if(($(this).attr('type')) === 'email') {
			frm_email_val(this);
		}
		if(frm_form_send()) {
			$('#frm_send').removeAttr('disabled');
		}  
	});
	
	function frm_email_val(FRM_OBJECT) {
		var FRM_VALUE = $(FRM_OBJECT).val();
		var FRM_FILTER = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
		
		if (FRM_FILTER.test(FRM_VALUE)) {
			console.log('Korrekte E-Mail-Adresse');
			return true;
		} else {
			console.log('Keine korrekte E-Mail-Adresse');
			return false;
		}
	}
	
	function frm_form_send() {
		var FRM_SEND = true;
		$('input').each(function() {
			if($(this).val() === '') {
				FRM_SEND = false;
			}
			if($(this).attr('type') === 'email') {
				FRM_SEND = frm_email_val(this);
			}
		});
		return FRM_SEND;
	}
	
	$('form').on('submit', function() {
		alert('Formular kann gesendet werden!');
	});
	
});