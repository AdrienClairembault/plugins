<?php

/* layout.html */
class __TwigTemplate_55cd7462679c29159dc9c724a2fda77c9971b46045bb6899105b91bec02de94a extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
            'message' => array($this, 'block_message'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">
<html xmlns=\"http://www.w3.org/1999/xhtml\">
<head>
  <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />
  <meta name=\"viewport\" content=\"width=device-width\"/>
  <style type=\"text/css\">
    ";
        // line 7
        $this->loadTemplate("ink.css", "layout.html", 7)->display($context);
        // line 8
        echo "  </style>
  <style>
    ";
        // line 10
        $this->loadTemplate("global.css", "layout.html", 10)->display($context);
        // line 11
        echo "  </style>
</head>
<body>
  <table class=\"body\">
    <tr>
      <td class=\"center\" align=\"center\" valign=\"top\">
        <center>

          <table class=\"row header\">
            <tr>
              <td class=\"center\" align=\"center\">
                <center>

                  <table class=\"container\">
                    <tr>
                      <td class=\"wrapper last\">

                        <table class=\"twelve columns\">
                          <tr>
                            <td class=\"six sub-columns\">
                              <img src=\"https://raw.githubusercontent.com/glpi-project/plugins/master/frontend/app/images/logo-small.png\">
                              <span class=\"sublogo\">Plugins</span>
                            </td>
                            <td class=\"six sub-columns last\" style=\"text-align:right; vertical-align:middle;\">
                              <span class=\"template-label\">";
        // line 35
        echo twig_escape_filter($this->env, (isset($context["subject"]) ? $context["subject"] : null), "html", null, true);
        echo "</span>
                            </td>
                            <td class=\"expander\"></td>
                          </tr>
                        </table>

                      </td>
                    </tr>
                  </table>

                </center>
              </td>
            </tr>
          </table>

          <table class=\"container\">
            <tr>
              <td>

                <table class=\"row\">
                  <tr>
                    <td class=\"wrapper last\">

                      <table class=\"twelve columns\">
                        <tr>
                          <td>
                            ";
        // line 61
        $this->displayBlock('message', $context, $blocks);
        // line 62
        echo "                          </td>
                          <td class=\"expander\"></td>
                        </tr>
                      </table>

                    </td>
                  </tr>
                </table>

              </td>
            </tr>
          </table>

        </center>
      </td>
    </tr>
  </table>
</body>
</html>";
    }

    // line 61
    public function block_message($context, array $blocks = array())
    {
    }

    public function getTemplateName()
    {
        return "layout.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  115 => 61,  93 => 62,  91 => 61,  62 => 35,  36 => 11,  34 => 10,  30 => 8,  28 => 7,  20 => 1,);
    }
}
/* <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">*/
/* <html xmlns="http://www.w3.org/1999/xhtml">*/
/* <head>*/
/*   <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />*/
/*   <meta name="viewport" content="width=device-width"/>*/
/*   <style type="text/css">*/
/*     {% include 'ink.css' %}*/
/*   </style>*/
/*   <style>*/
/*     {% include 'global.css' %}*/
/*   </style>*/
/* </head>*/
/* <body>*/
/*   <table class="body">*/
/*     <tr>*/
/*       <td class="center" align="center" valign="top">*/
/*         <center>*/
/* */
/*           <table class="row header">*/
/*             <tr>*/
/*               <td class="center" align="center">*/
/*                 <center>*/
/* */
/*                   <table class="container">*/
/*                     <tr>*/
/*                       <td class="wrapper last">*/
/* */
/*                         <table class="twelve columns">*/
/*                           <tr>*/
/*                             <td class="six sub-columns">*/
/*                               <img src="https://raw.githubusercontent.com/glpi-project/plugins/master/frontend/app/images/logo-small.png">*/
/*                               <span class="sublogo">Plugins</span>*/
/*                             </td>*/
/*                             <td class="six sub-columns last" style="text-align:right; vertical-align:middle;">*/
/*                               <span class="template-label">{{subject}}</span>*/
/*                             </td>*/
/*                             <td class="expander"></td>*/
/*                           </tr>*/
/*                         </table>*/
/* */
/*                       </td>*/
/*                     </tr>*/
/*                   </table>*/
/* */
/*                 </center>*/
/*               </td>*/
/*             </tr>*/
/*           </table>*/
/* */
/*           <table class="container">*/
/*             <tr>*/
/*               <td>*/
/* */
/*                 <table class="row">*/
/*                   <tr>*/
/*                     <td class="wrapper last">*/
/* */
/*                       <table class="twelve columns">*/
/*                         <tr>*/
/*                           <td>*/
/*                             {% block message %}{% endblock %}*/
/*                           </td>*/
/*                           <td class="expander"></td>*/
/*                         </tr>*/
/*                       </table>*/
/* */
/*                     </td>*/
/*                   </tr>*/
/*                 </table>*/
/* */
/*               </td>*/
/*             </tr>*/
/*           </table>*/
/* */
/*         </center>*/
/*       </td>*/
/*     </tr>*/
/*   </table>*/
/* </body>*/
/* </html>*/
