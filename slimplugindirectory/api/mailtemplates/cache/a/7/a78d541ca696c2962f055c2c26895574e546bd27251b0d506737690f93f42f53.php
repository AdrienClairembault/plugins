<?php

/* user_message.html */
class __TwigTemplate_18f06e84c70fbe0dfb4f932f4917c69d6c55ae9133a5114caa4367f48fa7ea5e extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("layout.html", "user_message.html", 1);
        $this->blocks = array(
            'message' => array($this, 'block_message'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "layout.html";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_message($context, array $blocks = array())
    {
        // line 4
        echo "<p>
   Dear GLPi Plugins Admin Team,
</p>

<p>
   ";
        // line 9
        echo twig_escape_filter($this->env, (isset($context["firstname"]) ? $context["firstname"] : null), "html", null, true);
        echo " ";
        echo twig_escape_filter($this->env, (isset($context["lastname"]) ? $context["lastname"] : null), "html", null, true);
        echo " &lt;";
        echo twig_escape_filter($this->env, (isset($context["email"]) ? $context["email"] : null), "html", null, true);
        echo "&gt; left the following message :
</p>
<br />

<p>
   ";
        // line 14
        echo twig_escape_filter($this->env, (isset($context["message"]) ? $context["message"] : null), "html", null, true);
        echo "
</p>
";
    }

    public function getTemplateName()
    {
        return "user_message.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  50 => 14,  38 => 9,  31 => 4,  28 => 3,  11 => 1,);
    }
}
/* {% extends "layout.html" %}*/
/* */
/* {% block message %}*/
/* <p>*/
/*    Dear GLPi Plugins Admin Team,*/
/* </p>*/
/* */
/* <p>*/
/*    {{firstname}} {{lastname}} &lt;{{email}}&gt; left the following message :*/
/* </p>*/
/* <br />*/
/* */
/* <p>*/
/*    {{message}}*/
/* </p>*/
/* {% endblock %}*/
