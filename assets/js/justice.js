const VIOLATIONS = [
  /* ------------------ عالية / خطيرة ------------------ */
  { id: 'b01', category: 'behavior', title: 'إهمال مريض حرِج', desc: 'ترك مريض بحاجة لرعاية عاجلة دون تدخل أو إشراف.', punishment: 'إنذار + خصم نقاط' },
  { id: 'b02', category: 'behavior', title: 'تقديم دواء خاطئ', desc: 'إعطاء دواء غير مطابق للوصفة أو الجرعة.', punishment: 'محاكمة داخلية + خصم نقاط' },
  { id: 'b03', category: 'behavior', title: 'سوء استخدام المعدات الطبية', desc: 'استخدام الأجهزة الطبية بشكل خاطئ يضر المرضى.', punishment: 'إيقاف مؤقت + تدريب إضافي' },

  /* ------------------ متوسطة / تنظيمية ------------------ */
  { id: 'a01', category: 'administrative', title: 'تأخر عن الدوام', desc: 'الوصول المتأخر إلى مكان العمل دون عذر مقبول.', punishment: 'إنذار شفوي' },
  { id: 'a02', category: 'administrative', title: 'عدم تسليم التقارير اليومية', desc: 'عدم تقديم التقارير المطلوبة في الوقت المحدد.', punishment: 'إنذار + تدريب' },
  { id: 'a03', category: 'administrative', title: 'مخالفة إجراءات النظافة', desc: 'عدم الالتزام بإجراءات النظافة داخل المستشفى.', punishment: 'إنذار + خصم نقاط' },

  /* ------------------ بسيطة / ميدانية ------------------ */
  { id: 'f01', category: 'field', title: 'الحديث الترفيهي أثناء العمل', desc: 'التحدث أو الضحك أثناء التعامل مع المرضى.', punishment: 'تنبيه شفوي' },
  { id: 'f02', category: 'field', title: 'عدم ارتداء زي العمل', desc: 'الظهور بدون زي رسمي أو مع عدم ارتداء معدات الوقاية.', punishment: 'إنذار' },
  { id: 'f03', category: 'field', title: 'عدم تسجيل البيانات الصحيحة', desc: 'إهمال تسجيل بيانات المرضى أو الإجراءات.', punishment: 'تنبيه + مراجعة' },
/* ------------------ قوانين ------------------ */
  { id: 'r01', category: 'rules', title: 'استغلال الصلاحيات', desc: 'يمنع استغلال الصلاحيات لتحقيق مصلحة شخصية أو مساعدة صديق.', punishment: 'باند نهائي' },
  { id: 'r02', category: 'rules', title: 'احترام المواطنين', desc: 'يجب احترام جميع المواطنين وعدم التمييز بينهم.', punishment: 'رقابية' },
  { id: 'r03', category: 'rules', title: 'استخدام القوة', desc: 'يمنع استخدام القوة إلا في الحالات المصرح بها قانونياً.', punishment: 'رقابية' },
  { id: 'r04', category: 'rules', title: 'الأوامر والتعليمات', desc: 'الالتزام بالأوامر والتعليمات الصادرة من الرتب الأعلى.', punishment: 'رقابية' },
  { id: 'r05', category: 'rules', title: 'البلاغات والقضايا', desc: 'يمنع تعطيل أو إهمال البلاغات أو القضايا.', punishment: 'رقابية' },
  { id: 'r06', category: 'rules', title: 'معاملة المشتبه بهم', desc: 'يجب معاملة المشتبه بهم والمتهمين باحترام حتى ثبوت إدانتهم.', punishment: 'رقابية' },
  { id: 'r07', category: 'rules', title: 'التوقيف بدون سبب', desc: 'يمنع حجز أو توقيف أي شخص بدون سبب قانوني واضح.', punishment: 'رقابية' },
  { id: 'r08', category: 'rules', title: 'التلاعب بالأدلة', desc: 'يمنع التلاعب بالأدلة أو إخفاء أي دليل.', punishment: 'فصل نهائي' },
  { id: 'r09', category: 'rules', title: 'الزي الرسمي', desc: 'الالتزام بارتداء الزي الرسمي أثناء العمل.', punishment: 'رقابية' },
  { id: 'r10', category: 'rules', title: 'مغادرة العمل', desc: 'يمنع مغادرة العمل دون إذن من المسؤول المباشر.', punishment: 'رقابية' },
  { id: 'r11', category: 'rules', title: 'كتابة التقارير', desc: 'يجب كتابة التقارير بدقة وصدق وعدم إخفاء أي معلومة.', punishment: 'رقابية' },
  { id: 'r12', category: 'rules', title: 'موارد الدولة', desc: 'يمنع استغلال موارد الدولة لأغراض شخصية.', punishment: 'باند' },
  { id: 'r13', category: 'rules', title: 'سرية المعلومات', desc: 'يجب الحفاظ على سرية المعلومات والملفات.', punishment: 'رقابية' },
  { id: 'r14', category: 'rules', title: 'شؤون الأقسام الأخرى', desc: 'يمنع التدخل في شؤون الأقسام الأخرى إلا بتنسيق مسبق.', punishment: 'رقابية' },
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
        window.location.href = `jdetail.html?id=${id}`;
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
      <div class="big-ico"><i class="fas fa-exclamation-triangle"></i></div>
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
