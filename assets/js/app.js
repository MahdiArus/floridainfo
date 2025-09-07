const VIOLATIONS = [
  /* ------------------ العالية (behavior) ------------------ */
  { id: 'b01', category: 'behavior', title: 'خطف عسكري', desc: 'اختطاف شخص تابع للقوات أو عنصر عسكري خلال أداء الواجب أو خارجه.', punishment: 'محكمة عسكرية + فصل من العسكرية' },
  { id: 'b02', category: 'behavior', title: 'محاولة اغتيال', desc: 'محاولة قتل أو الإضرار بعنصر أو قائد بمقصد القتل.', punishment: 'محكمة عسكرية + فصل من العسكرية' },
  { id: 'b03', category: 'behavior', title: 'التلفظ على ضابط أو قيادة', desc: 'التلفظ بألفاظ مسيئة أو استخفاف ضد ضابط أو قيادة.', punishment: 'فصل + محكمة عسكرية' },
  { id: 'b04', category: 'behavior', title: 'ضرب ضابط أو قيادة متعمد', desc: 'الاعتداء الجسدي المتعمد على ضابط أو مسؤول.', punishment: 'تنتيل أو فصل (حسب شدة الحادث)' },
  { id: 'b05', category: 'behavior', title: 'تهريب أسلحة من خزنة الأرشيف', desc: 'إخراج أو سرقة أسلحة من مخزن أو خزنة التابعات للأرشيف.', punishment: 'فصل + عقوبة رقابية' },
  { id: 'b06', category: 'behavior', title: 'تهريب أسلحة أو ممنوعات بأي شكل', desc: 'نقل أو تسليم أسلحة/ممنوعات خارج النظام أو للمدنيين/مجرمين.', punishment: 'فصل' },
  { id: 'b07', category: 'behavior', title: 'تهريب مجرمين', desc: 'إيواء، نقل أو تسهيل هروب مجرمين، يندرج كبند خيانة عسكرية.', punishment: 'فصل (يُدرج ضمن بند 0.0: الخيانة العسكرية)' },
  { id: 'b08', category: 'behavior', title: 'التحزب', desc: 'الانخراط أو دعم حزب/جماعة سياسية داخل الجهاز العسكري.', punishment: 'فصل (يُدرج ضمن بند 0.0: الخيانة العسكرية)' },
  { id: 'b09', category: 'behavior', title: 'استغلال الرتبة لمصالح شخصية', desc: 'استخدام النفوذ أو الرتبة للحصول على مصالح شخصية غير مشروعة.', punishment: 'تنتيل (قد تصل لمحكمة عسكرية)' },

  /* ------------------ المتوسطة (administrative) ------------------ */
  { id: 'a01', category: 'administrative', title: 'كسر أمر قيادة (بأسلوب غير لائق)', desc: 'مخالفة أوامر القيادة وتصرف بأسلوب مهين أو غير لائق.', punishment: 'فصل' },
  { id: 'a02', category: 'administrative', title: 'كسر أمر قيادة (ضمن الرول بأسلوب مناسب)', desc: 'عدم تنفيذ أمر لكن بأسلوب مناسب داخل سياق الرول.', punishment: 'خصم نقاط أو تنتيل' },
  { id: 'a03', category: 'administrative', title: 'التأخر في تنفيذ أمر قيادة', desc: 'تأخير عن تنفيذ أوامر صادرة من القادة دون عذر مقبول.', punishment: 'خصم نقاط' },
  { id: 'a04', category: 'administrative', title: 'الكذب على القادة', desc: 'تقديم معلومات خاطئة أو كاذبة للقادة أو المسؤولين.', punishment: 'تنتيل' },
  { id: 'a05', category: 'administrative', title: 'رفض أوامر القادة', desc: 'رفض تنفيذ الأوامر الصادرة عن قيادة دون مبرر.', punishment: 'تنتيل' },
  { id: 'a06', category: 'administrative', title: 'مجادلة القادة في الميدان', desc: 'الجدال أو مناقشة القادة أثناء النشاط الميداني بأسلوب غير لائق.', punishment: 'خصم نقاط (قد تصل لتنتيل أو فصل إذا كان الأسلوب هجومي)' },
  { id: 'a07', category: 'administrative', title: 'مجادلة القادة في الراديو', desc: 'الوصول لمجادلة أو نقاش مع القادة عبر الراديو أثناء المهام.', punishment: 'خصم نقاط أو تنتيل' },
  { id: 'a08', category: 'administrative', title: 'المداهمة بدون إذن من أعلى رتبة في الميدان', desc: 'تنفيذ مداهمة دون الحصول على موافقة الرتبة الأعلى الميدانية.', punishment: 'إنذار + تأخير ترقية' },
  { id: 'a09', category: 'administrative', title: 'رفض أوامر مركز العمليات بدون سبب', desc: 'عدم تنفيذ أوامر مركز العمليات من دون مبرر مقنع.', punishment: 'إنذار + استلام شكاوى المواطنين في الاستقبال' },
  { id: 'a10', category: 'administrative', title: 'الكذب على ضابط', desc: 'الكذب مباشرة على ضابط مسؤول.', punishment: 'تنتيل (فصل في حال المستجد)' },
  { id: 'a11', category: 'administrative', title: 'إهانة مواطن بأي شكل', desc: 'التعامل المهين أو الإهانات اللفظية/الجسدية للمدنيين.', punishment: 'إنذار 3 شهور' },
  { id: 'a12', category: 'administrative', title: 'عدم ضبط الأفراد من أعلى رتبة في الميدان', desc: 'فشل الضباط في ضبط تشكيلاتهم خلال الميدان.', punishment: 'إنذار + تأخير ترقية' },
  { id: 'a13', category: 'administrative', title: 'مجادلة الضابط في الميدان', desc: 'الاعتراض أو الجدال مع الضباط أثناء العمل الميداني.', punishment: 'عقوبة ميدانية' },
  { id: 'a14', category: 'administrative', title: 'عدم تنفيذ أمر أي رتبة أعلى منك', desc: 'امتناع عن تنفيذ أوامر رتبة أعلى.', punishment: 'إنذار + تأخير بالترقية' },
  { id: 'a15', category: 'administrative', title: 'عدم استلام العمليات بجدية', desc: 'التعامل غير الجاد مع مهام استلام العمليات.', punishment: 'إيقاف عن العمل لمدة يومين' },
  { id: 'a16', category: 'administrative', title: 'عدم الجدية في أداء العمل', desc: 'قلة الالتزام والاهتمام بواجبات العمل.', punishment: 'إنذار + إيقاف عن العمل أسبوع' },
  { id: 'a17', category: 'administrative', title: 'تسجيل خروج وإهمال المركبة العسكرية', desc: 'مغادرة المركبة أو تركها دون تأمين أو اهتمام.', punishment: 'إنذار + تأخير ترقية + عقوبة ميدانية' },
  { id: 'a18', category: 'administrative', title: 'استخدام مركبة ليست لرتبتك', desc: 'قيادة أو استخدام مركبة مخصصة لرتبة أعلى دون إذن.', punishment: 'إنذار + مخالفة 1000' },

  /* ------------------ البسيطة / ميدانية (field) ------------------ */
  { id: 'f01', category: 'field', title: 'السوالف والضحك في الراديو', desc: 'الحديث الترفيهي أو الضحك عبر قناة العمل أثناء المهام.', punishment: 'تنتيل + خصم (فصل في حال مستجد)' },
  { id: 'f02', category: 'field', title: 'عدم الالتزام ببروتوكولات الراديو', desc: 'مخالفة قواعد استخدام الراديو والاتصالات المهنية.', punishment: 'إنذار شفوي؛ عند التكرار إنذار شهر' },
  { id: 'f03', category: 'field', title: 'كسر أمر ضابط', desc: 'عدم تنفيذ أمر ضابط مع وجود تعليمات واضحة.', punishment: 'عقوبة ميدانية فورية + إنذار شهر' },
  { id: 'f04', category: 'field', title: 'الترصد للمواطنين', desc: 'المراقبة أو الاقتراب المخل من مواطنين دون مبرر.', punishment: 'إنذار لمدة 3 شهور' },
  { id: 'f05', category: 'field', title: 'التدخل في شؤون مركز العمليات', desc: 'التصرف أو اتخاذ قرار داخل مركز العمليات بدون صلاحية.', punishment: 'إنذار لمدة أسبوعين' },
  { id: 'f06', category: 'field', title: 'إطلاق فوري على المواطن', desc: 'إطلاق نار مباشر على مواطن بدون مبرر قانوني.', punishment: 'إنذار 3 شهور + خصم' },
  { id: 'f07', category: 'field', title: 'قطع إشارات مرور', desc: 'التوقف أو قيادة المركبة مخالفة لإشارات المرور أثناء الواجب.', punishment: 'تنبيه؛ عند التكرار مرافقة ومنع من القيادة' },
  { id: 'f08', category: 'field', title: 'عدم الالتزام بالزي الرسمي', desc: 'الظهور بزي غير مطابق للوائح أو بلا زي.', punishment: 'إنذار' },
  { id: 'f09', category: 'field', title: 'الارتجال والتصرف بدون قوانين الشرطة', desc: 'التصرفات الفردية خارج اللوائح والإجراءات المعتمدة.', punishment: 'إنذار' },
  { id: 'f10', category: 'field', title: 'عدم الاستجابة بالراديو بدون سبب مقنع', desc: 'الامتناع عن الرد أو التفاعل عبر الراديو دون مبرر.', punishment: 'تنبيه شفوي؛ عند التكرار إنذار' },
  { id: 'f11', category: 'field', title: 'أخذ فترة استراحة أكثر من 30 دقيقة', desc: 'الاستراحات غير المصرح بها أو الطويلة عن الحد المسموح.', punishment: 'تنبيه شفوي؛ عند التكرار إنذار' },
  { id: 'f12', category: 'field', title: 'مقاطعة بلاغ', desc: 'مقاطعة أو تعطيل استقبال بلاغات الطوارئ.', punishment: 'استلام الاستقبال لمدة 30 دقيقة' },
  { id: 'f13', category: 'field', title: 'عدم أداء تحية لضباط', desc: 'الامتناع عن تحية الضباط أو إظهار احترام وظيفي.', punishment: 'إنذار' },
  { id: 'f14', category: 'field', title: 'الإطالة في التبليغ', desc: 'التأخير المبالغ فيه عند تبليغ الحوادث أو البلاغات.', punishment: 'تنبيه شفوي؛ عند التكرار إعادة هيكلة بروتوكولات الراديو' },
  { id: 'f15', category: 'field', title: 'التوقف في مكان غير مخصص', desc: 'إيقاف المركبة بمكان ممنوع أو يعيق الحركة العامة.', punishment: 'مخالفة 10000' },
  { id: 'f16', category: 'field', title: 'التوقف وتشغيل السفتي بدون سبب', desc: 'استخدام أنظمة السلامة/سفتي دون داع أو إيقاف مركبة بلا مبرر.', punishment: 'مستجد: تنبيه؛ جندي فأعلى: إنذار' },
  { id: 'f17', category: 'field', title: 'التوجه لحالة بدون إذن مركز العمليات', desc: 'التحرك لموقع أو حالة دون موافقة مركز العمليات.', punishment: 'تنبيه شفوي؛ عند التكرار إنذار' },
  { id: 'f18', category: 'field', title: 'عدم الإفصاح عن اسمك عند السؤال', desc: 'الامتناع عن ذكر اسمك أو رتبك عند استدعاء المواطنين أو الضباط.', punishment: 'إنذار' },
  { id: 'f19', category: 'field', title: 'مقاطعة بلاغ أو إهمال استقبال', desc: 'سلوك يؤدي لتأخير استقبال البلاغات—إجراء مؤقت على الاستقبال.', punishment: 'إعادة توجيه للاستقبال لمدة 30 دقيقة' },


  { id: 'r01', category: 'rules', title: 'الخيانة العسكرية', desc: 'ممنوع الخيانة العسكرية بجميع أشكالها.', punishment: 'رقابية' },
  { id: 'r02', category: 'rules', title: 'الواقعية في اللعب', desc: 'يجب اللعب بأقصى درجات الواقعية لتجنب المحاسبة.', punishment: 'رقابية' },
  { id: 'r03', category: 'rules', title: 'استغلال العسكرية', desc: 'ممنوع استغلال العسكرية لصالح أصدقائك أو لأي شكل.', punishment: 'باند نهائي' },
  { id: 'r04', category: 'rules', title: 'استخدام السلاح', desc: 'يسمح استخدام السلاح في الحالات الضرورية فقط مثل تهديد حياتك بسلاح أبيض أو ناري أو بأذن من مركز العمليات.', punishment: 'رقابية' },
  { id: 'r05', category: 'rules', title: 'الأعمال الإجرامية', desc: 'ممنوع عمل أي عمل إجرامي وأنت عسكري.', punishment: 'رقابية' },
  { id: 'r06', category: 'rules', title: 'مستوى الأسلحة', desc: 'يجب عليك اللعب بنفس أسلحة المجرم سواء كانت خفيفة أو ثقيلة.', punishment: 'رقابية' },
  { id: 'r07', category: 'rules', title: 'استغلال السلطة', desc: 'يمنع استخدام السلطة أو رتبتك للتعدي على اللاعبين.', punishment: 'رقابية' },
  { id: 'r08', category: 'rules', title: 'التفتيش والإيقاف', desc: 'عند استيقاف أو تفتيش المواطن يجب عليك إبلاغه بالسبب.', punishment: 'رقابية' },
  { id: 'r09', category: 'rules', title: 'التفتيش بدون سبب', desc: 'يمنع تفتيش المواطنين بدون سبب واضح.', punishment: 'رقابية' },
  { id: 'r10', category: 'rules', title: 'المروحيات في المطاردة', desc: 'يحق لك استخراج المروحيات بعد 5 دقائق من المطاردة بأمر مسؤول الحالة.', punishment: 'رقابية' },
  { id: 'r11', category: 'rules', title: 'السجن بدون سبب', desc: 'ممنوع سجن المواطن بدون سبب واضح مثل سرقة أو اعتداء عليك.', punishment: 'رقابية' },
  { id: 'r12', category: 'rules', title: 'زيادة التهم', desc: 'ممنوع زيادة التهم على المواطنين، يجب سجنه على التهم التي ارتكبها.', punishment: 'رقابية' },
  { id: 'r13', category: 'rules', title: 'الغياب عن الرول بلاي', desc: 'ممنوع الغياب عن الرول بلاي أكثر من 4 أيام، يجب تقديم طلب إجازة.', punishment: 'رقابية' },
  { id: 'r14', category: 'rules', title: 'الخروج من المركز', desc: 'ممنوع الخروج من المركز وعتادك ناقص.', punishment: 'رقابية' },
  { id: 'r15', category: 'rules', title: 'قتل المجرم المستسلم', desc: 'ممنوع قتل المجرم إذا سلم نفسه.', punishment: 'رقابية' },
  { id: 'r16', category: 'rules', title: 'ترك المجرم في الزنزانة', desc: 'ممنوع ترك المجرم في الزنزانة إلا بطلب منه، يجب التعامل معه.', punishment: 'رقابية' },
  { id: 'r17', category: 'rules', title: 'حقوق المواطن', desc: 'يجب إبلاغ المواطن عن حقوقه عند إلقاء القبض عليه: "تم إلقاء القبض عليك من قبل شرطة فلوريدا، أي كلمة تقولها قد تستخدم ضدك، يحق لك توكيل محامي إن وجد".', punishment: 'رقابية' },
  { id: 'r18', category: 'rules', title: 'تصديم المركبات', desc: 'ممنوع تصديم مركبة المجرم بشكل عشوائي في المطاردة.', punishment: 'رقابية' },
];




/* ---------- وظائف مساعدة ---------- */
function qs(sel){ return document.querySelector(sel) }
function qsa(sel){ return Array.from(document.querySelectorAll(sel)) }
function getQuery(name){
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

/* ---------- Index page: modal handling ---------- */
(function indexInit(){
  const about = qs('#about-modal');
  if(!about) return;
  const openBtn = qs('#open-about');
  const closeBtn = qs('#close-about');
  if(openBtn) openBtn.addEventListener('click', ()=> about.classList.remove('hidden'));
  if(closeBtn) closeBtn.addEventListener('click', ()=> about.classList.add('hidden'));
})();

/* ---------- category page: show list ---------- */
(function categoryInit(){
  const listPanel = qs('#list-panel');
  if(!listPanel) return;

  const cat = getQuery('cat') || 'administrative';
  const titleMap = {
    administrative: ['مخالفات تنظيمية', 'إجراءات وانضباط الموظفين'],
    field: ['مخالفات ميدانية', 'سلوكيات أثناء التعامل مع المرضى'],
    behavior: ['مخالفات خطيرة', 'إهمال المرضى أو استخدام خاطئ للمعدات'],
    rules: ['قوانين', 'القوانين والتعليمات الأساسية']
  };
  const titleEl = qs('#page-title'); if(titleEl) titleEl.textContent = titleMap[cat][0] || 'المخالفات';
  const subEl = qs('#page-sub'); if(subEl) subEl.textContent = titleMap[cat][1] || '';

  const listEl = qs('#violations-list');
  const countEl = qs('#count');

  function render(filterTxt=''){
    const items = VIOLATIONS
      .filter(v => v.category === cat && (v.title.includes(filterTxt) || v.desc.includes(filterTxt)));
    listEl.innerHTML = items.map(v => `
      <li class="violation" data-id="${v.id}">
        <div class="left">
          <div class="ico"><i class="fas fa-exclamation-triangle"></i></div>
          <div>
            <h4>${v.title}</h4>
            <p>${v.desc}</p>
          </div>
        </div>
        <div style="text-align:left">
          <div class="punishment">${v.punishment}</div>
        </div>
      </li>
    `).join('');
    countEl.textContent = `${items.length} نتيجة`;

    qsa('.violation').forEach(li => {
      li.addEventListener('click', ()=> {
        const id = li.dataset.id;
        window.location.href = `detail.html?id=${id}`;
      });
    });

    Array.from(listEl.children).forEach((el,i)=>{
      el.style.opacity = 0;
      el.style.transform = 'translateY(10px)';
      setTimeout(()=> {
        el.style.transition = 'all .36s cubic-bezier(.2,.9,.3,1)';
        el.style.opacity = 1;
        el.style.transform = 'none';
      }, 60 * i);
    });
  }

  render('');

  const searchInput = qs('#search');
  if(searchInput) searchInput.addEventListener('input', (e)=> render(e.target.value.trim()));
})();
/* ---------- إضافة بانر القوانين ---------- */
(function addLawsBanner(){
  const container = qs('.cards') || qs('#list-panel');
  if(!container) return;



  // أضف البانر أعلى البطاقات
  container.prepend(banner);

  // أنميشن دخول
  banner.style.opacity = 0;
  banner.style.transform = 'translateY(-20px)';
  setTimeout(()=> {
    banner.style.transition = 'all .5s cubic-bezier(.2,.9,.3,1)';
    banner.style.opacity = 1;
    banner.style.transform = 'translateY(0)';
  }, 200);
})();

/* ---------- detail page ---------- */
(function detailInit(){
  const panel = qs('#detail-panel');
  if(!panel) return;

  const id = getQuery('id');
  const item = VIOLATIONS.find(v=>v.id === id) || VIOLATIONS[0];

  const categoryMap = {
    rules: 'قوانين',
    behavior: 'خطيرة',
    administrative: 'تنظيمية',
    field: 'ميدانية'
  };
  const categoryArabic = categoryMap[item.category] || item.category;

  panel.innerHTML = `
    <div class="detail-title">
      <div class="big-ico"><i class="fas fa-gavel"></i></div>
      <div style="text-align:right">
        <h2 style="margin:0">${item.title}</h2>
        <p class="muted" style="margin-top:6px">تصنيف: ${categoryArabic}</p>
      </div>
    </div>

    <div class="detail-desc">
      <h4>الوصف</h4>
      <p>${item.desc}</p>

      <h4 style="margin-top:16px">العقوبة</h4>
      <div class="badge-punishment" style="background:rgba(239,68,68,0.08);color:var(--red);border:1px solid rgba(239,68,68,0.06)">${item.punishment}</div>
    </div>
  `;

  const badge = panel.querySelector('.badge-punishment');
  if(badge){
    badge.animate([
      { transform: 'scale(1)' },
      { transform: 'scale(1.03)' },
      { transform: 'scale(1)' }
    ], { duration: 1600, iterations: Infinity });
  }
})();
