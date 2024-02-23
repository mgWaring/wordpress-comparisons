window.jQuery((function(e){const t=window.metaslider.app?window.metaslider.app.MetaSlider:null;var i,a={loaded:!1,attach_event:function(e){var t=e.state().get("library");e.listenTo(t,"change",(function(e){a.update_slide_metadata({id:e.get("id"),caption:e.get("caption"),description:e.get("description"),title:e.get("title"),alt:e.get("alt")})}))},update_slide_metadata:function(t){var i=e(".slide").filter((function(i){return e(this).data("attachment-id")===t.id})),a=i.map((function(){return this.id.replace("slide-","")}));e(document).trigger("metaslider/image-meta-updated",[a.toArray(),t]),t.title?e(".title .default",i).html(t.title):e(".title .default",i).html("&nbsp;"),t.alt?e(".alt .default",i).html(t.alt):e(".alt .default",i).html("&nbsp;")}},s=window.create_slides=wp.media.frames.file_frame=wp.media({multiple:"add",frame:"post",library:{type:"image"}}),d=["insert","iframe"],l=s.states.models.filter((function(e){var t=e.id;return!d.filter((function(e){return t.includes(e)})).length}));s.states.remove(l),s.on("insert",(function(){var i=[];if(s.state().get("selection").map((function(e){i.push(e.toJSON().id)})),t){const e=1==i.length?t.__("Preparing 1 slide...","ml-slider"):t.__("Preparing %s slides...");t.notifyInfo("metaslider/creating-slides",t.sprintf(e,i.length),!0)}if(o(),window.location.href.indexOf("metaslider-start")>-1)var a="";else a=window.parent.metaslider_slider_id;var d={action:"create_image_slide",slider_id:a,selection:i,_wpnonce:metaslider.create_slide_nonce};e.ajax({url:metaslider.ajaxurl,data:d,type:"POST",error:function(e){t&&t.notifyError("metaslider/slide-create-failed",e,!0)},success:function(a){window.location.href.indexOf("metaslider-start")>-1?window.location.href="admin.php?page=metaslider&id="+a.data:(a.data.forEach((function(t){var i=window.metaslider.app.Vue.compile(t.html);e("#metaslider-slides-list > tbody").append(new window.metaslider.app.Vue({render:i.render,staticRenderFns:i.staticRenderFns}).$mount().$el),e([document.documentElement,document.body]).animate({scrollTop:e("#slide-"+t.slide_id).offset().top},2e3)})),setTimeout((function(){if(t){const e=1==i.length?t.__("1 slide added successfully","ml-slider"):t.__("%s slides added successfully");t.notifySuccess("metaslider/slides-created",t.sprintf(e,i.length),!0)}setTimeout((function(){t&&t.triggerEvent("metaslider/save")}),1e3)}),1e3))}})})),s.on("attach",(function(){a.loaded||a.attach_event(s)})),s.on("open activate uploader:ready",(function(){e('.media-menu a:contains("Media Library")').remove(),r(),l.forEach((function(t){e("#menu-item-"+t.id).remove()}))})),t&&s.on("open",(function(){t.notifyInfo("metaslider/add-slide-opening-ui",t.__("Opening add slide UI...","ml-slider"))})),t&&s.on("deactivate close",(function(){t.notifyInfo("metaslider/add-slide-closing-ui",t.__("Closing add slide UI...","ml-slider")),o()})),e(".metaslider").on("change",".js-inherit-from-image",(function(t){var i=e(this),a=i.parents(".can-inherit"),s=a.children("textarea,input[type=text]"),d=a.children(".default");i.is(":checked")?a.addClass("inherit-from-image"):(a.removeClass("inherit-from-image"),s.focus(),""===s.val()&&0===d.find(".no-content").length&&s.val(d.html()))})),e(".metaslider").on("click",".update-image",(function(d){d.preventDefault();var l=e(this),n=l.data("attachment-id");(i=window.update_slide_frame=wp.media.frames.file_frame=wp.media({title:MetaSlider_Helpers.capitalize(metaslider.update_image),library:{type:"image"},button:{text:MetaSlider_Helpers.capitalize(l.attr("data-button-text"))}})).on("open",(function(){n&&(i.state().get("selection").reset([wp.media.attachment(n)]),r(l.data("slideType"),l.data("slideId")))})),i.on("attach",(function(){a.loaded||a.attach_event(i)})),i.open(),i.on("select",(function(){i.state().get("selection").map((function(e){e=e.toJSON(),new_image_id=e.id,selected_item=e})),t&&t.notifyInfo("metaslider/updating-slide",t.__("Updating slide...","ml-slider"),!0),o();var s={action:"update_slide_image",_wpnonce:metaslider.update_slide_image_nonce,slide_id:l.data("slideId"),slider_id:window.parent.metaslider_slider_id,image_id:new_image_id};e.ajax({url:metaslider.ajaxurl,data:s,type:"POST",error:function(e){t&&t.notifyError("metaslider/slide-update-failed",e,!0)},success:function(i){e("#slide-"+l.data("slideId")+" .thumb").css("background-image","url("+i.data.thumbnail_url+")"),e("#slide-"+l.data("slideId")+", #slide-"+l.data("slideId")+" .update-image").data("attachment-id",selected_item.id),i.data.thumbnail_url&&e("#slide-"+l.data("slideId")).trigger("metaslider/attachment/updated",i.data),a.update_slide_metadata({id:selected_item.id,caption:selected_item.caption,description:selected_item.description,title:selected_item.title,alt:selected_item.alt}),t&&t.notifySuccess("metaslider/slide-updated",t.__("Slide updated successfully","ml-slider"),!0),e(".metaslider table#metaslider-slides-list").trigger("resizeSlides")}})})),i.on("close",(function(){o()})),s.on("close",(function(){o()})),i.on("all",(function(){"library"===i.state().id&&(i.$el.addClass("hide-menu"),i.$el.find(".media-button-select").text(i.options.button.text).addClass("button-primary"))}))}));var n=function(t){t.preventDefault(),window.metaslider.about_to_reload||(e(this).addClass("active").siblings().removeClass("active"),e("#image-api-container").length||(e(this).parents(".media-frame-router").siblings(".media-frame-content").append('<div id="image-api-container"></div>'),e("#image-api-container").append('<metaslider-external source="unsplash" :slideshow-id="'+window.parent.metaslider_slider_id+'" :slide-id="'+window.metaslider.slide_id+'" slide-type="'+(window.metaslider.slide_type||"image")+'"></metaslider-external>'),e(window).trigger("metaslider/initialize_external_api",{selector:"#image-api-container"}),delete window.metaslider.slide_id,delete window.metaslider.slide_type))},r=window.metaslider.add_image_apis=function(t,i){e('.media-menu-item.active:contains("Layer")').length&&!window.metaslider.pro_supports_imports||(window.metaslider.slide_type="layer",t&&(window.metaslider.slide_type=t),window.metaslider.slide_id=i,e(".unsplash-tab").remove(),e(".media-frame-router .media-router").append('<a href="#" id="unsplash-tab" class="text-black hover:text-blue-dark unsplash-tab media-menu-item">Unsplash Library</a>'),e(".toplevel_page_metaslider").on("click",".unsplash-tab",n),e(".media-frame-router .media-router .media-menu-item").on("click",(function(){e(window).trigger("metaslider/destroy_external_api"),e(this).addClass("active").siblings().removeClass("active")})))},o=window.metaslider.remove_image_apis=function(){window.metaslider.about_to_reload||(e(window).trigger("metaslider/destroy_external_api"),e(".toplevel_page_metaslider").off("click",".unsplash-tab",n),e(".unsplash-tab").remove(),e(".media-frame-router .media-router > a").first().trigger("click"))};if(e(".metaslider").on("click",".delete-slide",(function(t){t.preventDefault();var i=e(this),a={action:"delete_slide",_wpnonce:metaslider.delete_slide_nonce,slide_id:i.data("slideId"),slider_id:window.parent.metaslider_slider_id};i.parents("#slide-"+i.data("slideId")).removeClass("ms-restored").addClass("ms-deleting").append('<div class="ms-delete-overlay"><i style="height:24px;width:24px"><svg class="ms-spin" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-loader"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg></i></div>'),i.parents("#slide-"+i.data("slideId")).find(".ms-delete-status").remove(),e.ajax({url:metaslider.ajaxurl,data:a,type:"POST",error:function(e){alert(e.responseJSON.data.message),$slide=i.parents("#slide-"+i.data("slideId")),$slide.removeClass("ms-deleting"),$slide.find(".ms-delete-overlay").remove()},success:function(t){setTimeout((function(){$slide=i.parents("#slide-"+i.data("slideId")),$slide.addClass("ms-deleted").removeClass("ms-deleting").find(".metaslider-ui-controls").append('<button class="undo-delete-slide" title="'+metaslider.restore_language+'" data-slide-id="'+i.data("slideId")+'">'+metaslider.restore_language+"</button>");var t=$slide.find(".thumb").css("background-image").replace(/^url\(["']?/,"").replace(/["']?\)$/,"");t=window.location.href===t?"":t,"none"==e(".trashed-slides-cont").css("display")&&e(".trashed-slides-cont").css("display","")}),1e3)}})})),e(".metaslider").on("click",".undo-delete-slide, .trash-view-restore",(function(t){t.preventDefault();var i=e(this),a={action:"undelete_slide",_wpnonce:metaslider.undelete_slide_nonce,slide_id:i.data("slideId"),slider_id:window.parent.metaslider_slider_id};e("#slide-"+i.data("slideId")).find(".undo-delete-slide").html(""),i.parents("#slide-"+i.data("slideId")).removeClass("ms-deleted").addClass("ms-deleting").css("padding-top","31px").append('<div class="ms-delete-overlay"><i style="height:24px;width:24px"><svg class="ms-spin" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-loader"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg></i></div>'),i.parents("#slide-"+i.data("slideId")).find(".ms-delete-status").remove(),i.parents("#slide-"+i.data("slideId")).find(".delete-slide").focus(),e.ajax({url:metaslider.ajaxurl,data:a,type:"POST",error:function(e){$slide=i.parents("#slide-"+i.data("slideId")),$slide.removeClass("ms-restoring").addClass("ms-deleted"),$slide.find(".ms-delete-overlay").remove(),e.responseJSON?alert(e.responseJSON.data.message):alert("There was an error with the server and the action could not be completed.")},success:function(t){$slide=i.parents("#slide-"+i.data("slideId")),$slide.addClass("ms-restored"),$slide.removeClass("ms-deleting").find(".undo-delete-slide, .trash-view-restore").remove(),$slide.find(".ms-delete-overlay").remove(),e("#slide-"+i.data("slideId")+" h4").after('<span class="ms-delete-status is-success">'+metaslider.restored_language+"</span>"),e("#slide-"+i.data("slideId")).find(".row-actions.trash-btns").html("");var a=$slide.find(".thumb").css("background-image").replace(/^url\(["']?/,"").replace(/["']?\)$/,"");a=window.location.href===a?"":a}})})),e(".metaslider").on("click",".trash-view-permanent",(function(t){t.preventDefault();var i=e(this),a={action:"permanent_delete_slide",_wpnonce:metaslider.permanent_delete_slide_nonce,slide_id:i.data("slideId")};i.parents("#slide-"+i.data("slideId")).removeClass("ms-restored").addClass("ms-deleting").append('<div class="ms-delete-overlay"><i style="height:24px;width:24px"><svg class="ms-spin" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-loader"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg></i></div>'),i.parents("#slide-"+i.data("slideId")).find(".ms-delete-status").remove(),e.ajax({url:metaslider.ajaxurl,data:a,type:"POST",error:function(e){alert(e.responseJSON.data.message),$slide=i.parents("#slide-"+i.data("slideId")),$slide.removeClass("ms-deleting"),$slide.find(".ms-delete-overlay").remove()},success:function(t){setTimeout((function(){$slide=i.parents("#slide-"+i.data("slideId")),$slide.addClass("ms-deleted").removeClass("ms-deleting").find(".metaslider-ui-controls").append('<button class="undo-delete-slide" title="'+metaslider.restore_language+'" data-slide-id="'+i.data("slideId")+'">'+metaslider.restore_language+"</button>");var t=$slide.find(".thumb").css("background-image").replace(/^url\(["']?/,"").replace(/["']?\)$/,"");t=window.location.href===t?"":t,"none"==e(".restore-slide-link").css("display")&&e(".restore-slide-link").css("display","inline")}),1e3)}})})),e(".metaslider").on("resizeSlides","table#metaslider-slides-list",(function(t){var i=e("input.width").val(),a=e("input.height").val();e("tr.slide input[name='resize_slide_id']",this).each((function(){$this=e(this);var t=$this.attr("data-width"),s=$this.attr("data-height"),d=e(this).closest("tr"),l=d.data("crop_changed");if(t!=i||s!=a||l){$this.attr("data-width",i),$this.attr("data-height",a);var n={action:"resize_image_slide",slider_id:window.parent.metaslider_slider_id,slide_id:$this.attr("data-slide_id"),_wpnonce:metaslider.resize_nonce};e.ajax({type:"POST",data:n,async:!1,cache:!1,url:metaslider.ajaxurl,success:function(e){l&&d.data("crop_changed",!1),e.data.thumbnail_url&&$this.closest("tr.slide").trigger("metaslider/attachment/updated",e.data)}})}}))})),e(".tipsy-tooltip").tipsy({className:"msTipsy",live:!1,delayIn:500,html:!0,gravity:"e"}),e(".tipsy-tooltip-top").tipsy({live:!1,delayIn:500,html:!0,gravity:"s"}),e(".tipsy-tooltip-bottom").tipsy({live:!1,delayIn:500,html:!0,gravity:"n"}),e(".tipsy-tooltip-bottom-toolbar").tipsy({live:!1,delayIn:500,html:!0,gravity:"n",offset:2}),e("#sampleslider-btn").on("click",(function(){window.location.href=e("#sampleslider-options").val()})),window.location.href.indexOf("withcaption")>-1&&e("input[value='override']").attr("checked",!0).trigger("click"),e("#quickstart-browse-button").click((function(){window.create_slides.open()})),e("#slideshows-list").length&&e("#search_slideshow-search-input").length){var m=e("#search_slideshow-search-input").val();""!=m&&e("#slideshows-list .pagination-links a").each((function(){this.href=this.href+"&s="+m}))}"disabled"==e('select[name="settings[smartCrop]"]').val()?e('input[name="settings[smoothHeight]"]').closest("tr").show():e('input[name="settings[smoothHeight]"]').closest("tr").hide(),e('select[name="settings[smartCrop]"]').change((function(){"disabled"==e(this).val()?e('input[name="settings[smoothHeight]"]').closest("tr").show():(e('input[name="settings[smoothHeight]"]').closest("tr").hide(),e('input[name="settings[smoothHeight]"]').prop("checked",!1))}))}));var MetaSlider_Helpers={capitalize:function(e){return e.replace(/\b\w/g,(function(e){return e.toUpperCase()}))}};
