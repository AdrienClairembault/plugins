<?php

/* external_account_mail_as_main.html */
class __TwigTemplate_1808d2fc4b37b555f0073f92f29d339cdc4d065f6e6a5db5d733c4cf703ea98f extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        // line 1
        $this->parent = $this->loadTemplate("layout.html", "external_account_mail_as_main.html", 1);
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
   Dear ";
        // line 5
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["user"]) ? $context["user"] : null), "username", array()), "html", null, true);
        echo ",
</p>
<p>
   You choose to have ";
        // line 8
        echo twig_escape_filter($this->env, $this->getAttribute((isset($context["user"]) ? $context["user"] : null), "email", array()), "html", null, true);
        echo " as primary email account for GLPi Plugins.
</p>
<p>
   Your email address is validated by ";
        // line 11
        echo twig_escape_filter($this->env, (isset($context["service"]) ? $context["service"] : null), "html", null, true);
        echo ".
</p>
<p>
   You don't have anything to do to validate this email address.<br />
   Welcome aboard !
</p>
";
    }

    public function getTemplateName()
    {
        return "external_account_mail_as_main.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  46 => 11,  40 => 8,  34 => 5,  31 => 4,  28 => 3,  11 => 1,);
    }
}
/* {% extends "layout.html" %}*/
/* */
/* {% block message %}*/
/* <p>*/
/*    Dear {{user.username}},*/
/* </p>*/
/* <p>*/
/*    You choose to have {{user.email}} as primary email account for GLPi Plugins.*/
/* </p>*/
/* <p>*/
/*    Your email address is validated by {{service}}.*/
/* </p>*/
/* <p>*/
/*    You don't have anything to do to validate this email address.<br />*/
/*    Welcome aboard !*/
/* </p>*/
/* {% endblock %}*/
